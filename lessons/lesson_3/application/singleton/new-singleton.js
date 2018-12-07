// Так как является константой, не может быть измененно
const _data = {
  store: [],
  counter: 0
};
// Создаем обьект и методы
const Store = {
  add: item => _data.store.push(item),
  get: id => _data.store.find( d => d.id === id ),
  showAllLang: () => [ ..._data.store ],
  getCounter: () => _data.counter,
  addCounter: (num) => _data.counter += num
};
// Замораживаем
Object.freeze(Store);

export default Store;
