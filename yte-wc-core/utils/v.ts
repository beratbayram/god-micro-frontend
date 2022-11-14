import { unsafeCSS } from "lit";

function _v(postfix: string,args: string[]): string {
  const value = args.shift();
  if(!value) throw new Error(`Invalid value: ${value}`);

  if(args.length === 0) return `var(--yte-${value}${postfix})`;
  return `var(--yte-${value}${postfix},${_v(postfix,args)})`;
}

// Advanced var css function with multiple fallbacks
export default function v(postfix: string,...args: string[]) {
  return unsafeCSS(_v(postfix,args));
}
