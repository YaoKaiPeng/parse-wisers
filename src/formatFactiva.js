const moment = require("moment");
const cheerio = require("cheerio");

module.exports = function (html) {
  const list = html
    .replace(
      /<p><a id=(.*?)<\/a>/g,
      "<a data-id='ers' id=$1</a><p><a id=$1</a>"
    )
    .split(/<a data-id='ers' id=.*?<\/a>/);
  if (list.length > 1) {
    list.shift();
  }

  const results = list.map((item, index) => {
    let [_item] = item.split(/<p>文件 .*?<\/p>/);
    if (item.startsWith("<p></p>") || _item.startsWith("<p> </p>")) {
      _item = _item.replace(/<p><\/p>|<p> <\/p>/, "");
    }
    if (_item.startsWith("<p><img")) {
      _item = _item.replace(/<p><img.*?<\/p>/, "");
    }
    if (_item.startsWith("<p></p>") || _item.startsWith("<p> </p>")) {
      _item = _item.replace(/<p><\/p>|<p> <\/p>/, "");
    }
    let [title, infos, ..._content] = _item.split(/<p><\/p>/);
    const titleDom = cheerio.load(title, { decodeEntities: false });
    const infoDom = cheerio.load(infos, { decodeEntities: false });
    let date;
    infos.split(/<\/p>/).forEach((info_item) => {
      if (
        info_item.length > 4 &&
        info_item.includes("年") &&
        info_item.includes("月")
      ) {
        date = info_item.replace(/<p>/, "").trim();
      }
    });
    return {
      date: moment(date, "YYYY 年 MM 月 DD 日 HH:mm").format(
        "YYYY-MM-DD HH:mm"
      ),
      from: infoDom("p:nth-child(4)").text(),
      in: titleDom("p:nth-child(1)").text(),
      by: infoDom("p:nth-child(1)").text().replace("By ", "").trim(),
      title: titleDom("p strong").text(),
      content: _content.join(""),
    };
  });
  return results;
};
