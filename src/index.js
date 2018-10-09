import { Decimal } from "decimal.js";

module.exports.subscribe = (req, res) => {
  const x = new Decimal(0.3).minus(0.1);
  return res.send(`Hello World! ${x}`);
}
