import { Decimal } from "decimal.js";

function subscribe(event: any, callback: any) {
  const x = new Decimal(0.3).minus(0.1);
  return callback(null, x);
}

export { subscribe };
