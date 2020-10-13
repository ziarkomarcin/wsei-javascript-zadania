// Z A D A N I E  1

var car = {
  name: 'BMW',
  model: 'M5 e60',
  power: '507HP',
  color: 'black'
};
console.log(car);

// Z A D A N I E  2

car.changeName = function(chg){
    this.name = chg;
}
car.changeName('Audi');
console.log(car);
