// Turnery inside template literals
let a = true;
let b = "true";
let c = "false";

let abc = `${a ? `${b}` : `${c}`}`;
