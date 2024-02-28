console.log("exporting module");

const spcost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};

const total = 123;
const totalq = 2333;
export { total, totalq as tq };

//export default
const back = 1234;
export default { back };
