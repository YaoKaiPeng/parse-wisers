var formatText = require("./formatText.js");
var formatDoc = require("./formatDoc.js");
var formatHtml = require("./formatHtml.js");
var formatFactiva = require("./formatFactiva");

module.exports = {
  formatText,
  formatDoc,
  formatHtml,
  parseWisers: function({ text, type }) {
    if (type == "TXT") {
      return formatText(text);
    }
    if (type == "DOC") {
      return formatDoc(text);
    }
    if (type == "HTML") {
      return formatHtml(text);
    }
    if (type == "factiva") {
      return formatFactiva(text);
    }
    return new Error("Type is Error. Please choose between TXT, DOC and HTML.");
  }
};
