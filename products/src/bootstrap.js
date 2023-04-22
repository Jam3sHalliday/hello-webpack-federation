import faker from 'faker';

let products = '';

for (let i = 0; i < 3; ++i) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`
}

document.querySelector('#dev-products').innerHTML = products;

// context / situation #1
/**
 * running this file in dev isolation
 * using our local index.html which definitely has the id above
 * want to immediately render our app into element 
 */

/**
 * context / situation #2
 * running this file in dev or prod
 * through Container App
 * NO GUARANTEE that we have an element with id above
 * we don't want to render immediately1
 */