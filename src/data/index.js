const fs = require('fs');
const config = require('config');
const fetch = require('node-fetch');
const convert = require('xml-js');

module.exports = async () => {
  const res = await fetch(config.get('wiki_url'));
  const data = await res.text();
  const json = convert.xml2json(data, { compact: false, spaces: 4 });
  fs.writeFileSync('./src/data/sitemap.json', json);
};
