const menu = {
   courses: {
    apps: [],
    mains: [],
    desserts: []
   },
   addDishToCourse: function(courseName, dishName, dishPrice) {
    const dish = {
        name: dishName,
        price: dishPrice
    };
    this.courses[courseName].push(dish);
   },
   getRandomDishFromCourse: function(courseName) {
    const dishes = this.courses[courseName];
    const randomDish = Math.floor(Math.random() * dishes.length);
    return dishes[randomDish];
   },
   generateRandomMeal: function() {
    let app = this.getRandomDishFromCourse('apps');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');

    let total = app.price + main.price + dessert.price;
    return `Your meal is ${app.name}, ${main.name}, and ${dessert.name} and costs $${total}.`;
   }
};

menu.addDishToCourse('apps', 'wings', 8);
menu.addDishToCourse('apps', 'bread sticks', 4);
menu.addDishToCourse('apps', 'salad', 7);

menu.addDishToCourse('mains', 'burgers', 10);
menu.addDishToCourse('mains', 'lobster', 18);
menu.addDishToCourse('mains', 'burrito', 10);


menu.addDishToCourse('desserts', 'ice cream', 5);
menu.addDishToCourse('desserts', 'cup cake', 3);
menu.addDishToCourse('desserts', 'cake', 5);

const meal = menu.generateRandomMeal();
console.log(meal);
