const moment = require('moment')
const cheerio = require('cheerio')

module.exports = function(html) {
  const $ = cheerio.load(html, { decodeEntities: false })
  const ids = $('Table[width="100%"][style="table-layout:fixed;"] tr')
    .map((i, el) => {
      const href = $(el)
        .find('td a')
        .first()
        .attr('href')
      if (!href) return
      const [, id] = href.split('#')
      return id
    })
    .get()
  const result = ids.map(id => {
    const doms = getNext($(`a[name="${id}"]`))
    const [infos, title, content] = doms
    const [fromInfos, , byInfos] = infos
      .text()
      .trim()
      .split(/\n/)
    const fromArray = fromInfos.trim().split(/ \| | \./)
    const [, _from] = fromArray
    const [_in, _by] = byInfos.trim().split(/\|By/)
    const _title = title
      .find('tr font[size="5"]')
      .html()
      .replace(/<font class="highlight".+?font>/g, '')
    const url = title.find('tr p font[size="3"] a').attr('href')
    const _content = content
      .find('td')
      .html()
      .replace(/<font class="highlight".+?font>/g, '')

    return {
      from: _from,
      in: _in,
      by: _by,
      date: moment(fromArray.pop(), 'YYYY-MM-DD (HH:mm)').format(
        'YYYY-MM-DD HH:mm:ss'
      ),
      url,
      title: _title,
      content: _content,
    }
  })
  return result
}

// 得到对应的的兄弟元素
function getNext(dom, list) {
  let nextDoms = list || []
  if (dom.next().is('table')) {
    nextDoms.push(dom.next())
    return getNext(dom.next(), nextDoms)
  } else {
    return nextDoms
  }
}
