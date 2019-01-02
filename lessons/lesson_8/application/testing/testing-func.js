const reduceCart = (cart, filter, value) => {

  return cart.filter( item => item[filter] === value )
        .reduce( (sum, item ) => {
          // console.log( item.name, item.price, item.quantity, item.quantity || 1);
          return sum + ( item.price * (item.quantity || 1 ) )
        }, 0 );
}

export default reduceCart;
