/* eslint-disable @typescript-eslint/no-var-requires */
const {writeFileSync, readdirSync, existsSync} = require('fs');
const {convertTo} = require('./lib');

module.exports.handler = async () => {
  writeFileSync('/tmp/test.txt', Buffer.from('Hello World!'));
  console.log(readdirSync('/opt/instdir/program/'));
  console.log('SOffice exists?: ' + existsSync('/opt/instdir/program/soffice'));

  return convertTo('test.txt', 'pdf');
};
