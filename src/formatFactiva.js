const moment = require("moment");
const cheerio = require("cheerio");

module.exports = function(html) {
  const list = html.split(/<p>文件 .+?<\/p>/);
  list.pop();
  const results = list.map((item, index) => {
    let _item = item;
    if (item.startsWith("<p></p>")) {
      _item = _item.replace("<p></p>", "");
    }
    const [, title, infos, ..._content] = _item.split(/<p><\/p>/);
    const titleDom = cheerio.load(title, { decodeEntities: false });
    const infoDom = cheerio.load(infos, { decodeEntities: false });
    const date = infoDom("p:nth-child(3)").text();
    return {
      date: moment(date, "YYYY 年 MM 月 DD 日 HH:mm").format(
        "YYYY-MM-DD HH:mm"
      ),
      from: infoDom("p:nth-child(4)").text(),
      in: titleDom("p:nth-child(1)").text(),
      by: infoDom("p:nth-child(1)")
        .text()
        .replace("By ", "")
        .trim(),
      title: titleDom("p strong").text(),
      content: _content.join("")
    };
  });
  return results;
};
