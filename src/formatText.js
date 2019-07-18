const moment = require('moment')
const cheerio = require('cheerio')

module.exports = function(text) {
  const html = text
    .replace(/\n|\r/g, '</p><p>')
    .replace(/\n/g, '')
    .replace(/<p><\/p>/g, '')
  const listHtml = html.split(
    /<p>DOCUMENT ID.+?copyright clearance or any damage\/loss suffered as a result. <\/p>|<p>====.+?====<\/p>|<p>文章编号\:.+?损失承担责任。<\/p>/
  )
  listHtml.shift()
  listHtml.pop()
  listHtml.pop()
  const list = listHtml.map(item => {
    const [infos, content] = item.split(/<p>---.+?---<\/p>/)
    const $ = cheerio.load(infos, { decodeEntities: false })
    let _data = {}
    if (html.includes('DOCUMENT ID.')) {
      // 海外版文件
      title = $('p:last-child').html()
      const [_in, _by] = $('p:nth-child(2)')
        .text()
        .split('|By ')
      const fromArray = $('p:first-child')
        .text()
        .split(/ \| |\. /)
      const [, _from] = fromArray
      _data = { title, _in, _by, _from, date: fromArray.pop() }
    }
    if (html.includes('文章编号:')) {
      // 国内版文件
      const _text = $('p').html()
      const [, _from, infos] = _text.split(/\. |-  /)
      const [title, date, ...info] = infos.split(' ')
      const _by = info.length > 1 ? info.pop() : ''
      const _in = info.join('')
      _data = {
        title: title.replace(/\(|\)/g, ''),
        date,
        _from: _from.trim(),
        _in,
        _by,
      }
    }
    return {
      from: _data._from,
      in: _data._in,
      by: _data._by,
      date: moment(_data.date, 'YYYY-MM-DD (HH:mm)').format(
        'YYYY-MM-DD HH:mm:ss'
      ),
      title: _data.title,
      content,
    }
  })
  return list
}
