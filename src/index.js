//import {Decimal} from "decimal.js"; // これだと駄目

const Decimal = require('decimal.js'); //これだと動く
module.exports.subscribe = (req, res) => {
  const x = new Decimal('0xff.f')
  return res.send(`Hello World! ${x}`);
}
