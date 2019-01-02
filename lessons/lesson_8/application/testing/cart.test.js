import reducingCart from './testing-func';
import api from './testing-api-func';

/*

  Можно исползовать две

  Как настроить импорты ES2015 :  https://jestjs.io/docs/en/getting-started#using-babel
  Expect: https://jestjs.io/docs/en/expect#methods
*/

test('Counting cart', () => {
  expect(
    reducingCart([
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
    ])
  ).toBe(201);
})

test('Counting cart with quantity', () => {
  expect(
    reducingCart([
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
    ])
  ).toBe(801);
})

test('Count red cart items with quantity', () => {
  let data = reducingCart([
    {
      name: 'Strawberry',
      color: 'red',
      price: 20,
      quantity: 5
    },
    {
      name: 'Red apple',
      color: 'red',
      price: 3,
      quantity: 13
    },
    {
      name: 'Avocado',
      color: 'green',
      price: 50,
      quantity: 1
    },
    {
      name: 'Cherry',
      color: 'red',
      price: 17,
      quantity: 7
    }
  ], 'color', 'red');
  expect(data).toBe(258);
})

test('#GetUsers from api', () => {
  return api.getRandomUsers().then( data => {
      expect(data).toBeDefined();
      expect( data[0].name ).toBe('Ortega Weaver');
    })
})


test('Check #GetUsers Schema', () => {
    return api.getRandomUsers().then( data => {
      expect(data).toBeDefined();
      const oldSchema = ['index', 'age', 'gender', 'name'];
      expect( Object.keys(data[0]) ).toEqual( expect.arrayContaining(oldSchema) )
      expect( data[0] ).toMatchObject({
        friends: expect.any(Array),
        balance: expect.any(String),
        index: expect.any(Number)
      });

    });

})
