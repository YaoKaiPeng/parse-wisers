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
    if (!_item.startsWith("<p><img")) {
      _item = item;
    }
    if (_item.startsWith("<p> </p>")) {
      _item = _item.replace("<p> </p>", "");
    }
    let [logo, title, infos, ..._content] = _item.split(/<p><\/p>/);
    const logoDom = cheerio.load(logo, { decodeEntities: false });
    if (logoDom.text().trim()) {
      const [_title, _infos, ..._content1] = _item.split(/<p><\/p>/);
      title = _title;
      infos = _infos;
      _content = _content1;
    }
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
