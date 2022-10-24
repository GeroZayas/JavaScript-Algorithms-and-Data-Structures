/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.*/

/*convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.*/

function convertHTML(str) {
  // &colon;&rpar;
  var htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"']/g, function (match) {
    return htmlEntities[match];
  });
}

console.log(convertHTML("Dolce & Gabbana"));
