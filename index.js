// INPUT: an object with a "name" attribute such as
//   {name: 'Benny', type: 'dog'}
// OUTPUT: the value of the 'name' attribute i.e. Benny
// REQS: use destructuring and the function should be a single line

export const getName = ({ name }) => {
  return name
}

// INPUT: an object with a nested "address" attribute such as
//   {name: 'Bob Smith', address: {street: 'Main Street', number: 123, city: 'Anytown', country: 'USA}}
// OUTPUT: the string 'Bob Smith lives at 123 Main Street, Anytown, USA'
// REQS: use destructuring and template literals

export const printAddress = ({ name, address: { number, street, city, country} }) => {
  return `${name} lives at ${number} ${street}, ${city}, ${country}`
}

// REFACTOR CHALLENGE
// Refactor this function so that all values in the object are destructured
// as part of the funciton definitions (i.e. there should be no dots in the template literals)
export const printUserInfo = ({ 
    username, 
    name: { first, last },
    info: { favorites: 
            { food, color },
    pet: { type, name },
    address: { street, number, city, country }}
    },) => {
  return `
    Username: ${username},
    Full Name: ${first} ${last},
    Favorite Color: ${color},
    Favorite Food: ${food},
    Pet Name: ${name},
    Address: ${number} ${street}, ${city}, ${country}
    `
}

// INPUT: an unknown number of input arguments, all numbers
// OUTPUT: their sum
// REQS: use rest parameters
//  getSum(1, 2, 3) === 6
//  getSum(1, 2, 3, 4, 5) === 15
export const getSum = (...inputs) => {
  let sum = 0;
  const length = inputs.length;
  for (let i = 0; i < length; i++) {
    sum += inputs[i];
  }
  return sum;
}

// INPUT: an unknown number of arguments
// OUTPUT: an array with the first two arguments destructured and the remaining in a nested array
// REQS: use rest parameters
// getFirstTwoArgs(1, 2, 3, 4, 5) should return [1, 2, [3, 4, 5]]
// getFirstTwoArgs('a', 'b', 'c', 'd') should return ['a', 'b', ['c', 'd']]
export const getFirstTwoArgs = (first, second, ...inputs) => {
  return [first, second, inputs]
}

// INPUT: an object with the following structure
// {
//   shoes: ['Air Max', 'Air Force', 'Air Jordan', 'Air Mag', 'Pegasus', 'Kobe'],
//   slogan: 'Just Do It',
//   logo: 'Swoosh',
//   headquarters: 'Portland',
// }
// OUTPUT: an object with an additional attribute called sneakerCount which appends the number of shoes
// in the shoes array
// {
//   shoes: ['Air Max', 'Air Force', 'Air Jordan', 'Air Mag', 'Pegasus', 'Kobe'],
//   slogan: 'Just Do It',
//   logo: 'Swoosh',
//   headquarters: 'Portland',
//   sneakerCount: 6
// }
// REQS:
//    use destructuring to get the children attribute
//    return a NEW object, do not modify the object passed in to the function
//    use spread operator to create a new object

export const addSneakerCount = ({shoes, ...inputs}) => {
  const nike = {shoes, inputs}
  const count = shoes.length;
  nike.sneakerCount = count;
  return nike;
}

// INPUT: brands from data.js
// OUTPUT: the brand names listed
// REQS: use Object.keys to solve
export const getBrandNames = (brands) => {
  const brandNames = Object.keys(brands);
  return brandNames;
}

// INPUT: brands from data.js
// OUTPUT: total number of sneaker types across all brands (14)
export const totalSneakerCount = ({Nike, Puma, Adidas}) => {
  const sum = Nike.shoes.length + Puma.shoes.length + Adidas.shoes.length
  return sum
}

// INPUT: An object
// OUTPUT: An array with key value pairs converted to arrays
// EXAMPLE:
// convertToArray({ a: 1, b: 2 }) => [["a", 1], ["b", 2]]
// convertToArray({}) => []
// Source: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

export const convertToArray = (input) => { 
    let newArray = [];
    for (let key of Object.keys(input)) {
      newArray.push([key, input[key]]);
    }
    return newArray;
};

