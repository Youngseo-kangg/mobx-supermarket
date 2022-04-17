import { makeAutoObservable } from 'mobx';

const initialCartStore = {
  items: [],
};

const cartStatus = makeAutoObservable({
  ...initialCartStore,
  addCart(item) {
    let existIdx = this.items.findIndex((el) => el.name === item.name);
    console.log(existIdx);
    if (existIdx === -1) this.items.push(item);
    else this.items[existIdx].count++;
  },
  removeCart(id) {},
  get cartItems() {
    return this.items;
  },
});

export default cartStatus;
