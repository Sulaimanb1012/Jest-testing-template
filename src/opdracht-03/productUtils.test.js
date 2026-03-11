import { sortByPrice, filterByCategory, searchProducts } from './productUtils';

describe('Product Utils', () => {
  
  // Test data die we in meerdere tests gebruiken
  const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
    { id: 2, name: 'Muis', price: 25, category: 'electronics' },
    { id: 3, name: 'Bureau', price: 150, category: 'furniture' },
    { id: 4, name: 'Stoel', price: 89, category: 'furniture' }
  ];

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: sortByPrice sorteert op prijs laag naar hoog', () => {
    const result = sortByPrice(products);
    expect(result[0].name).toBe('Muis');
    expect(result[3].name).toBe('Laptop');
  });

  test('filterByCategory geeft alleen electronics terug', () => {
    // TODO: Filter op category 'electronics'
    const result = filterByCategory(products, 'electronics');
    // TODO: Check of er 2 producten terugkomen
    expect(result).toHaveLength(2);
    // Extra check: namen kloppen
    expect(result[0].category).toBe('electronics');
    expect(result[1].category).toBe('electronics');
  });

  test('filterByCategory geeft lege array bij onbekende categorie', () => {
    // TODO: Filter op category 'clothing' (bestaat niet)
    const result = filterByCategory(products, 'clothing');
    // TODO: Check of de array leeg is
    expect(result).toEqual([]);
  });

  test('searchProducts vindt producten met zoekterm', () => {
    // TODO: Zoek naar 'bureau'
    const result = searchProducts(products, 'bureau');
    // TODO: Check of resultaat 1 product bevat
    expect(result).toHaveLength(1);
    // TODO: Check of dat product 'Bureau' heet
    expect(result[0].name).toBe('Bureau');
  });

  test('searchProducts is case insensitive', () => {
    // TODO: Zoek naar 'LAPTOP' (hoofdletters)
    const result = searchProducts(products, 'LAPTOP');
    // TODO: Check of het resultaat 'Laptop' bevat
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Laptop');
  });

});