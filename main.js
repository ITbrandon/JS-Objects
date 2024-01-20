const houseForSale = {
  area: 940,
  value: 320000,
  streetName: "Fifth Street",
  built: "2012",
  owner: {
    name: "Blake",
    age: 29
  },
  offers: [290000, 295000, 315000, 312000]
}

console.log(houseForSale);

delete houseForSale.built;

houseForSale.owner.age = 30;

const maxOffer = houseForSale.offers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, houseForSale.offers[0])

console.log(maxOffer);

houseForSale["Sales Price"] = 312000;

console.log(houseForSale);





