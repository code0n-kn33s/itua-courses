test('works', () => {
  expect(1).toBe(1);
})

test('do something', ()=> {
  let data = [1,2,3,4].reduce( (sum, item) => sum+item, 0 );
  expect( data ).toBe(10);
})
