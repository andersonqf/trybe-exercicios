let items = ['Big Mac', 'Big Tasty', 'Batata', 'Refrigerante', 'Suco'];
let price = [20, 30, 20, 5, 4];

// for ( let index = 0; index < items.length; index += 1) {
//     console.log (items[index] + ' = R$ ' + price[index]);
// }

//=================================================================================================

let money = 20;
let cart = []

for (let index = 0; index < items.length; index += 1) {
  if (price[index] <= money) {
    cart.push(items[index] + ' = R$ ' + price[index])
    }


}

console.log(cart);

