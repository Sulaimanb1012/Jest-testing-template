import { ShoppingCart } from './ShoppingCart';

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    // Maak een nieuwe ShoppingCart aan voor elke test
    cart = new ShoppingCart();
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: nieuwe cart is leeg', () => {
    expect(cart.getItemCount()).toBe(0);
  });

  test('addItem voegt product toe', () => {
    cart.addItem({ id: 1, name: 'Laptop', price: 999 });
    expect(cart.getItemCount()).toBe(1);
  });

  test('addItem met quantity voegt meerdere items toe', () => {
    cart.addItem({ id: 2, name: 'Muis', price: 25 }, 3);
    expect(cart.getItemCount()).toBe(3);
  });

  test('getTotal berekent juiste totaal', () => {
    cart.addItem({ id: 3, name: 'Muis', price: 25 }, 2);
    expect(cart.getTotal()).toBe(50); // 2 x 25 = 50
  });

  test('removeItem verwijdert product', () => {
    cart.addItem({ id: 4, name: 'Toetsenbord', price: 45 });
    cart.removeItem(4);
    expect(cart.getItemCount()).toBe(0);
  });

  test('clear maakt cart leeg', () => {
    cart.addItem({ id: 5, name: 'Laptop', price: 999 });
    cart.addItem({ id: 6, name: 'Muis', price: 25 });
    cart.clear();
    expect(cart.getItemCount()).toBe(0);
  });
});