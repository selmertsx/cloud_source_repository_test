import { Decimal } from "decimal.js";

function subscribe(req: any, res: any){
  const x = new Decimal('0xff.f')
  return res.send(`Hello World! ${x}`);
}

export { subscribe }
