'use scrict';

const retaurant =
{
    name: 'Class Italiano',
    location: 'Via Agenlo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian',
    '0rganic'],
    starMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad',],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    oder: function(starterIndex, mainIndex)
    {
        return [this.starMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x, y, z);
console.log (arr);

let [main , ,secondary] = retaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);


//revecive return values form funcetion
const [starter, mainCourse] = retaurant.oder(2,0);
console.log (starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i ,j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i,j,k);

//default values
const [p=1,q=1,r=1] = [8,9]
console.log (p,q,r);
