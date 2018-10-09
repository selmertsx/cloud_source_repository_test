import { Decimal } from "decimal.js";

exports.subscribe = (event: any, callback: any) => {
  const x = new Decimal(0.3).minus(0.1);
  console.log("hoge");
  callback(null, x);
};
