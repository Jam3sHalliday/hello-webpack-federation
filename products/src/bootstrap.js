import faker from 'faker';

const product = (el) => {
    let products = '';

    for (let i = 0; i < 3; ++i) {
        const name = faker.commerce.productName();

        products += `<div>${name}</div>`
    }

    el.innerHTML = products;
}

// context / situation #1
/**
 * running this file in dev isolation
 * using our local index.html which definitely has the id above
 * want to immediately render our app into element 
 */

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // using id #dev... to detect env
    // if found => we're running in isolation
    if (el) product(el);
}

/**
 * context / situation #2
 * running this file in dev or prod
 * through Container App
 * NO GUARANTEE that we have an element with id above
 * we don't want to render immediately1
 */
export { product };
