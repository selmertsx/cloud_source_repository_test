import {Decimal} from "decimal.js";

module.exports.subscribe = (req, res) => {
  const x = new Decimal('0xff.f')
  return res.send(`Hello World! ${x}`);
}
