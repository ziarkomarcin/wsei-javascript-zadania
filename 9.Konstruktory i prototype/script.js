// Z A D A N I E  1

class Person{
    constructor(name, lastname, age, country, city, language){
        this.name = name;
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
    newCity(city) {
        this.city = city;
    }
    newAge(age) {
            this.age = age;
    }
}
const personA = new Person('Marcin', 'Ziarko', 21, 'Poland', 'Kraków', 'polish');
const personB = new Person('Janusz', 'Korwin', 69, 'Poland', 'Warsaw', 'polish');
const personC = new Person('Anna', 'Wesołowska', 23, 'Poland', 'Szczebrzeszyn', 'polish');
const personD = new Person('Maria', 'Wesołowska', 54, 'Poland', 'Gniezno', 'polish');
const personE = new Person('Ryszard', 'Peja', 50, 'Poland', 'Sopot', 'polish');

personB.newAge(52);
personE.newAge(20);
personA.newCity("Andrychów");

console.log(personA);
console.log(personB);
console.log(personE);
