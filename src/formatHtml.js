const moment = require("moment");
const cheerio = require("cheerio");

module.exports = function(html) {
  const $ = cheerio.load(html, { decodeEntities: false });
  let result = [];
  const ids = $('Table[width="100%"][style="table-layout:fixed;"] tr')
    .map((i, el) => {
      const href = $(el)
        .find("td a")
        .first()
        .attr("href");
      if (!href) return;
      const [, id] = href.split("#");
      return id;
    })
    .get();
  result = ids.map(id => {
    const doms = getNext($(`a[name="${id}"]`));
    const [infos, title, content] = doms;
    const _title = title
      .find('tr font[size="5"]')
      .html()
      .replace(/<font class="highlight".+?font>/g, "");
    const _content = content
      .find("tbody")
      .html()
      .replace(/tr>|td>/g, "div>")
      .replace(/<font class="highlight".+?font>/g, "");
    let data = {};
    if (html.includes("DOCUMENT ID:")) {
      // 海外版数据
      const [fromInfos, , byInfos] = infos
        .text()
        .trim()
        .split(/\n/);
      const fromArray = fromInfos.trim().split(/ \| | \./);
      const [, _from] = fromArray;
      const [_in, _by] = byInfos.trim().split(/\|By/);
      const url = title.find('tr p font[size="3"] a').attr("href");
      const date = fromArray.pop();
      data = { _from, _in, _by, url, date };
    } else {
      // 国内版数据
      const infoText = infos.find("td").text();
      const [formText, inText, byText] = infoText.split(/\n/);
      const byArray = byText.split(/ \|/);
      const _by = byArray[byArray.length - 1];
      const textArray = formText.split(" | ");
      const _date = textArray[textArray.length - 1];
      const [, _from] = textArray[0].split(".");
      const [_in] = inText.split(" | ");
      const url = content.find("td a").attr("href");
      data = { _from, _in, _by, url, date: _date };
    }
    return {
      from: data._from,
      in: data._in,
      by: data._by,
      date: moment(data.date, "YYYY-MM-DD (HH:mm)").format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      url: data.url,
      title: _title,
      content: _content
    };
  });
  return result;
};

// 得到对应的的兄弟元素
function getNext(dom, list) {
  let nextDoms = list || [];
  if (dom.next().is("table")) {
    nextDoms.push(dom.next());
    return getNext(dom.next(), nextDoms);
  } else {
    return nextDoms;
  }
}