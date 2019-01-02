import reducingCart from './testing-func';
import api from './testing-api-func';

const testingWrap = () => {

    const cart = [
      {
        name: 'Magic beans',
        price: 50
      },
      {
        name: 'Broken Sword of dumbass',
        price: 1
      },
      {
        name: 'Justice fork',
        price: 150
      }
    ];

    const cart_quantity = [
      {
        name: 'Magic beans',
        price: 50,
        quantity: 10
      },
      {
        name: 'Broken Sword of dumbass',
        price: 1,
        quantity: 1
      },
      {
        name: 'Justice fork',
        price: 150,
        quantity: 2
      }
    ];

    if(  reducingCart(cart) !== 201 ){
      throw new Error('Cart counting failed');
    } else {
      console.log('Cart counting passed ✅');
    }

    if(  reducingCart(cart_quantity) !== 801 ){
      throw new Error('Cart counting failed');
    } else {
      console.log('Cart counting passed ✅');
    }

    api.getRandomUsers().then( res => console.log( res[0].name) );




}

export default testingWrap;
