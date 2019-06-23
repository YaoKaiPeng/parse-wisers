const moment = require('moment')
const cheerio = require('cheerio')

module.exports = function(html) {
  const [, ...list] = html.split(/<p>~~.+?~~<\/p>/)
  const results = list.map(item => {
    const [infos, details] = item.split(/<p>Keyword Matched.+?<\/p>/)
    const [article] = details.split(/<p>DOCUMENT ID.+?<\/p>/)
    const infoNode = cheerio.load(infos, { decodeEntities: false })
    const articleNode = cheerio.load(article, { decodeEntities: false })
    const [fromInfos, byInfos = ''] = infoNode('p:first-child')
      .text()
      .trim()
      .split(/\|By /)
    const [, date, _from, _in] = fromInfos.trim().split(/ \| | \.|\| /)
    const title = articleNode('p').html()
    const content = articleNode('p')
      .nextAll()
      .map(function(i, el) {
        return articleNode(el).html()
      })
      .get()
      .join('<br />')
    return {
      date: moment(date, 'YYYY-MM-DD (HH:mm)').format('YYYY-MM-DD HH:mm:ss'),
      from: _from,
      in: _in,
      by: byInfos.replace(/\| | \|/g, ''),
      title,
      content,
    }
  })
  return results
}
