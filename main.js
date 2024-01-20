const banana = {
  name: "banana",
  quantity: 1,
  price: 1.95
}

const apple = {
  name: "apple",
  quantity: 1,
  price: 1.45
}

const candy = {
  name: "candy",
  quantity: 1,
  price: 3.50
}

const store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: [banana, apple, candy]
}

console.log(store);


for(let i = 0; i < store.products.length; i++)
{
  console.log(store.products[i]);
}

console.log(store.products[store.products.indexOf(candy)]);

store.products[store.products.indexOf(banana)].price = 1.75

console.log(store, banana);
candy.price = 4.99;
console.log(store, candy);