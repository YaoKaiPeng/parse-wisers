const moment = require("moment");
const cheerio = require("cheerio");

module.exports = function(html) {
  const [, ...list] = html.split(/<p>~~.+?~~<\/p>/);
  const results = list.map(item => {
    if (html.includes("DOCUMENT ID")) {
      // 海外版数据
      const [infos, details] = item.split(/<p>Keyword Matched.+?<\/p>/);
      const [article] = details.split(/<p>DOCUMENT ID.+?<\/p>/);
      const infoNode = cheerio.load(infos, { decodeEntities: false });
      const articleNode = cheerio.load(article, { decodeEntities: false });
      const [fromInfos, byInfos = ""] = infoNode("p:first-child")
        .text()
        .trim()
        .split(/\|By /);
      const [, date, _from, _in] = fromInfos.trim().split(/ \| | \.|\| /);
      const title = articleNode("p").html();
      const content = articleNode("p")
        .nextAll()
        .map(function(i, el) {
          return articleNode(el).html();
        })
        .get()
        .join("<br />");
      return {
        date: moment(date, "YYYY-MM-DD (HH:mm)").format("YYYY-MM-DD HH:mm:ss"),
        from: _from,
        in: _in,
        by: byInfos.replace(/\| | \|/g, ""),
        title,
        content
      };
    } else {
      // 国内版数据
      const [_html] = item.split(/<p>文章编号.+?<\/p>|<p>文章編號.+?<\/p>/);
      const $ = cheerio.load(_html, { decodeEntities: false });
      const titleDom = formatTitle(_html);
      const title = titleDom.text();
      const titleHtml = titleDom.html();
      const [, content] = _html.split(titleHtml);
      const [, _text = ""] = content.split("原文连接：");
      const [url] = _text.split("</p>");
      const infoText = $("p:first-child").text();
      const [date, _from, _in, _by] = infoText
        .split(/\| | \|/)
        .filter(n => n && n !== " ");
      return {
        date: moment(date, "YYYY-MM-DD (HH:mm)").format("YYYY-MM-DD HH:mm:ss"),
        from: _from,
        in: _in,
        by: _by,
        title,
        content
      };
    }
  });
  return results;
};

// 循环查询title
function formatTitle(html, index = 2) {
  const $ = cheerio.load(html, { decodeEntities: false });
  const text = $(`p:nth-child(${index})`).text();
  if (text.includes("|")) {
    return formatTitle(html, index + 1);
  } else {
    return $(`p:nth-child(${index})`);
  }
}
