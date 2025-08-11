// // Page 1 of 9
// // 1. Write a program that take two numbers & add 
// // them in a new variable. Show the result in your browser.

// var num1=+prompt("1st num ")
// var num2=+prompt("2nd num ")
// var result=num1+num2
// document.write(`The Sum of ${num1} n ${num2} is ${result}`)

// // 2. Repeat task1 for 
// // subtraction, multiplication, division & modulus.
// var num1=+prompt("1st num ")
// var num2=+prompt("2nd num ")
// var result=num1-num2
// document.write(`The Sub of ${num1} n ${num2} is ${result}`)

// var num1=+prompt("1st num ")
// var num2=+prompt("2nd num ")
// var result=num1*num2
// document.write(`The multiply of ${num1} n ${num2} is ${result}`)

// var num1=+prompt("1st num ")
// var num2=+prompt("2nd num ")
// var result=num1/num2
// document.write(`The divide of ${num1} n ${num2} is ${result}`)

// // 3. Do the following using JS Mathematic Expressions 
// // a. Declare a variable. 
// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// // c. Initialize the variable with some number. 
// // d. Show the value of variable in your browser like “Initial value: 5”.
// //  e. Increment the variable. 
// // f. Show the value of variable in your browser like “Value after increment is: 6”. 
// // g. Add 7 to the variable. 
// // h.Show the value of variable in your browser like “Value after addition is: 13”. 
// // i. Decrement the variable. 
// // j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// // // k. Show the remainder after dividing the variable’s value by 3.
//  let output = "";

//   // a. Declare a variable
//   let myVar;

//   // b. Show value after declaration
//   output += "Value after variable declaration is: " + myVar + "<br>";

//   // c. Initialize the variable
//   myVar = 5;

//   // d. Show initial value
//   output += "Initial value: " + myVar + "<br>";

//   // e. Increment the variable
//   myVar++;

//   // f. Show value after increment
//   output += "Value after increment is: " + myVar + "<br>";

//   // g. Add 7 to the variable
//   myVar += 7;

//   // h. Show value after addition
//   output += "Value after addition is: " + myVar + "<br>";

//   // i. Decrement the variable
//   myVar--;

//   // j. Show value after decrement
//   output += "Value after decrement is: " + myVar + "<br>";

//   // k. Remainder after dividing by 3
//   let remainder = myVar % 3;
//   output += "The remainder is: " + remainder + "<br>";


// // 4. Cost of one movie ticket is 600 PKR.
// //  Write a script to store ticket price in 
// //  a variable & calculate the cost of buying 5 tickets to a movie.
// //  Example output:

// var ticket=600
// var how=prompt("how much??")
// var  total=ticket*how
// document.write(total)

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var Celsius=25
// var CtoF=(Celsius*9)/5+32
// document.write(`The celsius of ${Celsius}°C in Ferhrenheit is ${CtoF}°F <br>  `)

// var Fahrenheit=70
// var FtoC=((Fahrenheits-32)*5)/9
// document.write(`The Fahrenheit of ${Fahrenheit}°F in celsius is ${FtoC}°C <br> `)


// Write a program to implement checkout process of a shopping cart system for an e-commerce website.
//  Store the following in variables
//  a. Price of item 1 b. 
// Price of item 2
//  c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
//   let priceItem1 = 500;       // Price of item 1
//   let priceItem2 = 800;       // Price of item 2
//   let qtyItem1 = 2;           // Ordered quantity of item 1
//   let qtyItem2 = 1;           // Ordered quantity of item 2
//   let shippingCharges = 100;  // Shipping charges

//   // Calculate costs
//   let totalItem1 = priceItem1 * qtyItem1;
//   let totalItem2 = priceItem2 * qtyItem2;
//   let subtotal = totalItem1 + totalItem2;
//   let totalCost = subtotal + shippingCharges;

//   // Create receipt text
//   let receipt = `
//   Price of Item 1: $${priceItem1}
//   Quantity of Item 1: ${qtyItem1}
//   Total for Item 1: $${totalItem1}

//   Price of Item 2: $${priceItem2}
//   Quantity of Item 2: ${qtyItem2}
//   Total for Item 2: $${totalItem2}

//   Shipping Charges: $${shippingCharges}

//   Total Cost: $${totalCost}
//   `;


// 9. Assume we have 10 US dollars & 25 Saudi Riyals.
//  Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// var dollars=104.80
// var Riyals=28
// var pak1=dollars*10
// var pak2=Riyals*25
// var total=pak1+pak2
// document.write(`total currency to Pakistani Rupees is ${total}`)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 b. Multiply by 10 
// c. Divide the result by 2 Perform all calculations in a single expression

// var arithmetic=((0+5)*10)/2
// console.log(arithmetic);

// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
//  a. Store the current year in a variable.
//   b. Store their birth year in a variable.
//    c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

// var current=2025
// var birth=2003

// var age=25-3
// document.write(`current year is ${current} <br> birth year is ${birth}  <br> age is ${age}`)

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

var fav=prompt("put your fAV snack")
var age=+ prompt("what is your age")
var agemax=60
var times=+prompt("How much times you Consume per day")
var total=((age-60)*365)*3
document.write(`FAV Snck${fav} <br> Current age is ${age} <br> estimated age ${agemax} <br> Per Day Snack ${times} <br>  You Need ${total} ${fav} to last you until the rip old age of ${agemax}`)

/**
 * Checkout helpers for a shopping cart.
 * All functions are pure and validated.
 */

/**
 * Compute line total for an item.
 * @param {number} price - price per unit (>= 0)
 * @param {number} qty - integer quantity (>= 0)
 * @returns {number}
 */
export function lineTotal(price, qty) {
  if (typeof price !== 'number' || typeof qty !== 'number') {
    throw new TypeError('price and qty must be numbers');
  }
  if (price < 0 || qty < 0) {
    throw new RangeError('price and qty must be >= 0');
  }
  if (!Number.isFinite(price) || !Number.isFinite(qty)) {
    throw new RangeError('price and qty must be finite');
  }
  return Number((price * qty).toFixed(2));
}

/**
 * Compute subtotal for array of items
 * @param {{price:number, qty:number}[]} items
 * @returns {number}
 */
export function subtotal(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array');
  }
  const total = items.reduce((acc, item) => {
    if (!item || typeof item.price !== 'number' || typeof item.qty !== 'number') {
      throw new TypeError('each item must have numeric price and qty');
    }
    return acc + lineTotal(item.price, item.qty);
  }, 0);
  return Number(total.toFixed(2));
}

/**
 * Compute grand total including shipping and optional discount
 * @param {{price:number, qty:number}[]} items
 * @param {number} shipping
 * @param {number} [discount=0] - discount amount (absolute)
 * @returns {{subtotal:number, shipping:number, discount:number, total:number}}
 */
export function grandTotal(items, shipping, discount = 0) {
  if (typeof shipping !== 'number' || typeof discount !== 'number') {
    throw new TypeError('shipping and discount must be numbers');
  }
  if (shipping < 0 || discount < 0) {
    throw new RangeError('shipping and discount must be >= 0');
  }
  const sub = subtotal(items);
  const total = Number((sub + shipping - discount).toFixed(2));
  return {
    subtotal: sub,
    shipping: Number(shipping.toFixed(2)),
    discount: Number(discount.toFixed(2)),
    total: total >= 0 ? total : 0
  };
}
to
import { lineTotal, subtotal, grandTotal } from '../src/checkout.js';

describe('checkout helpers', () => {
  test('lineTotal simple', () => {
    expect(lineTotal(10, 3)).toBe(30);
    expect(lineTotal(10.123, 2)).toBe(20.25); // rounded to 2 decimals
  });

  test('subtotal and grandTotal', () => {
    const items = [{ price: 100, qty: 1 }, { price: 25.5, qty: 2 }];
    expect(subtotal(items)).toBe(151);
    const gt = grandTotal(items, 10, 5);
    expect(gt.subtotal).toBe(151);
    expect(gt.shipping).toBe(10);
    expect(gt.discount).toBe(5);
    expect(gt.total).toBe(156);
  });

  test('grandTotal never negative', () => {
    const items = [{ price: 1, qty: 1 }];
    const gt = grandTotal(items, 0, 10);
    expect(gt.total).toBe(0);
  });

  test('invalid inputs throw', () => {
    // a few examples
    expect(() => lineTotal(-1, 2)).toThrow();
    expect(() => subtotal('nope')).toThrow();
  });
});
// Lightweight demo showing outputs in browser (no bundler)
(function () {
  // replicate logic inline (same as src for demo simplicity)
  function lineTotal(price, qty) {
    return Number((price * qty).toFixed(2));
  }
  function subtotal(items) {
    return items.reduce((acc, i) => acc + lineTotal(i.price, i.qty), 0);
  }
  function grandTotal(items, shipping, discount = 0) {
    const sub = subtotal(items);
    const total = Number((sub + shipping - discount).toFixed(2));
    return {
      subtotal: Number(sub.toFixed(2)),
      shipping: Number(shipping.toFixed(2)),
      discount: Number(discount.toFixed(2)),
      total: total >= 0 ? total : 0
    };
  }

  const items = [
    { price: 500, qty: 2 },
    { price: 800, qty: 1 }
  ];
  const gt = grandTotal(items, 100);
  const receiptEl = document.getElementById('receipt');
  receiptEl.textContent = JSON.stringify(gt, null, 2);

  function runExpressionSequence(initial = 5) {
    const snapshots = [];
    let v;
    snapshots.push({ desc: 'Value after variable declaration is', value: v });
    v = initial;
    snapshots.push({ desc: 'Initial value', value: v });
    v += 1;
    snapshots.push({ desc: 'Value after increment is', value: v });
    v += 7;
    snapshots.push({ desc: 'Value after addition is', value: v });
    v -= 1;
    snapshots.push({ desc: 'Value after decrement is', value: v });
    snapshots.push({ desc: 'The remainder is', value: v % 3 });
    return snapshots;
  }

  const seq = runExpressionSequence();
  const mathEl = document.getElementById('mathseq');
  mathEl.textContent = seq.map((s) => `${s.desc}: ${s.value}`).join('\n');
}());
