/**
 * Amortization Replayment Calculator
 * Amortization is used to calculate the periodic repayment amount of principal and interest.
 */

/**
 This can be home loan mortgage, business / personal term loans, car financing. Amortisation is paying off the owed amount over time, making planned incremental payments of principal and interest.
 */

/**
 * The Amortisation is calculated with the formula:
 * An = (r/n) * P / 1-(1+r/n)^-nt
 *
 * An = Periodic payment amount
 * P = Principal; total borrowed amount
 * r = Percentage rate per annum; usual advertised a x%p.a
 * n = number of repayment intervals per year; monthly / fortnightly / weekly
 * t = term of the loan; life the loan; years
 * r/n = rate per repayment interval; expressed as decimal
 * nt = total number of payment periods; total months / weeks
 *
 * Example: A man want to buy a car that costs $100,000 (tax included). If he makes a down payment of 10%. What will his monthly repayments be if the annual interest rate is 7% for term of 5 years.
 *
 * In the case:
 * An : Repayment monthly amount
 * P : $30,000
 * r : 8.4% : 0.084
 * n : 12 months
 * t : 5 years
 * r/n : 0.07/12 : 0.005833333333
 * nt : 12*5 : 60 months
 */

/**
 * Interest repayment
 *
 * interest = P * (r/n)
 *
 * P : $30000
 * r : 8.4% pa : 0.084
 * n : 12 months
 * r/n : 0.084/12
 */

let An = 0;
let P = 30000;
const r = 0.084;
const n = 12;
const t = 6;
const rn = r / n;
const nt = n * t;
let month = 0;
let mi = 0;
let pp = 0;
let ti = 0;

// Calculates monthly repayment amount of interest and principal

function amortization(principal) {
  if (month === nt || P === 0) {
    console.log("Congrats your loan is repaid!");
  } else if (month === 0) {
    An = (((r / n) * P) / (1 - (1 + r / n) ** -nt)).toFixed(0);
    mi = (P * (r / n)).toFixed(2);
    pp = (An - mi).toFixed(2);
    ti = parseFloat(mi);
    console.log(`Month: ${month}/${nt} - Repayment: $${An}`);
    console.log(`Total Owing: $${P.toFixed(2)}`);
    console.log(`Interest paid: $${mi} - Total Interest: $${ti}`);
    console.log(`Principal paid: ${pp}`);
    console.log("");
    month++;
    P -= pp;
    return amortization(P);
  } else {
    mi = (P * (r / n)).toFixed(2);
    pp = (An - mi).toFixed(2);

    ti = parseFloat(ti) + parseFloat(mi);
    ti = ti.toFixed(2);

    console.log(`Month: ${month}/${nt} - Repayment: $${An}`);
    console.log(`Total Owing: $${P.toFixed(2)}`);
    console.log(`Interest paid: $${mi} - Total Interest: $${ti}`);
    console.log(`Principal paid: ${pp}`);
    console.log("");
    month++;
    P -= pp;
    return amortization(P);
  }
}
amortization(P);
