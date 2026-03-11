/**
 * Een simpele winkelwagen class
 */
export class ShoppingCart {
  constructor() {
    // Array waarin alle producten worden opgeslagen
    this.items = [];
  }

  /**
   * Voeg een product toe aan de winkelwagen
   * @param {object} product - Het product object, bijvoorbeeld {id, name, price}
   * @param {number} quantity - Aantal stuks (standaard 1)
   */
  addItem(product, quantity = 1) {
    // Check of het product al in de winkelwagen zit
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity; // verhoog aantal
    } else {
      this.items.push({ ...product, quantity }); // voeg nieuw product toe
    }
  }

  /**
   * Verwijder een product uit de winkelwagen op basis van productId
   * @param {number|string} productId
   */
  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  }

  /**
   * Bereken het totaalbedrag van alle items
   * @returns {number}
   */
  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  /**
   * Bereken het totaal aantal items in de winkelwagen
   * @returns {number}
   */
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  /**
   * Leeg de winkelwagen
   */
  clear() {
    this.items = [];
  }

  /**
   * Optioneel: haal een kopie van de items (bijvoorbeeld voor UI weergave)
   * @returns {Array}
   */
  getItems() {
    return [...this.items];
  }
}

/**
 * VOORBEELD GEBRUIK:
 * 
 * import { ShoppingCart } from './ShoppingCart';
 * const cart = new ShoppingCart();
 * 
 * cart.addItem({id: 1, name: 'Laptop', price: 1000}, 2);
 * cart.addItem({id: 2, name: 'Muis', price: 25});
 * console.log(cart.getTotal()); // 2025
 * console.log(cart.getItemCount()); // 3
 * cart.removeItem(1);
 * console.log(cart.getItems());
 * cart.clear();
 */