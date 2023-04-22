import faker from 'faker';

const cart = (el) => {
    const cartText = `<div>you have ${faker.random.number()} items </div>`

    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    
    if (el) cart(el)
}

export { cart };
