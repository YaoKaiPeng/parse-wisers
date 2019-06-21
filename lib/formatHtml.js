const moment = require('moment')
const cheerio = require('cheerio')

function die(msg) {
  console.log(msg)
  process.exit()
}

module.exports = function(text) {
  const html = text
    .replace(/\n|\r/g, '</p><p>')
    .replace(/\n/g, '')
    .replace(/<p><\/p>/g, '')
  const listHtml = html.split(
    /<p>DOCUMENT ID.+?copyright clearance or any damage\/loss suffered as a result. <\/p>|<p>====.+?====<\/p>/
  )
  listHtml.shift()
  listHtml.pop()
  listHtml.pop()
  const list = listHtml.map(item => {
    const [infos, content] = item.split(/<p>---.+?---<\/p>/)
    const $ = cheerio.load(infos, { decodeEntities: false })
    const title = $('p:last-child').html()
    const [_in, _by] = $('p:nth-child(2)')
      .text()
      .split('|By ')
    const fromArray = $('p:first-child')
      .text()
      .split(/ \| |\. /)
    const [, _from] = fromArray
    return {
      from: _from,
      in: _in,
      by: _by,
      date: moment(fromArray.pop(), 'YYYY-MM-DD (HH:mm)').format(
        'YYYY-MM-DD HH:mm:ss'
      ),
      title,
      content,
    }
  })
  return list
}
