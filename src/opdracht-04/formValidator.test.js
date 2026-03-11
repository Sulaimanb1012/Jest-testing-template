import { isValidEmail, isValidPhone, isValidPostcode, validateForm } from './formValidator';

describe('Form Validator', () => {
  let testData;

  beforeEach(() => {
    // Maak hier een testData object aan met geldige gegevens
    testData = {
      email: 'test@example.com',
      phone: '0612345678',
      postcode: '1234 AB'
    };
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: isValidEmail accepteert geldig email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('isValidEmail weigert email zonder @', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
  });

  test('isValidPhone accepteert 06 nummer', () => {
    expect(isValidPhone('0612345678')).toBe(true);
  });

  test('isValidPhone accepteert nummer met streepjes', () => {
    expect(isValidPhone('06-1234-5678')).toBe(true);
  });

  test('isValidPostcode accepteert postcode met spatie', () => {
    expect(isValidPostcode('1234 AB')).toBe(true);
  });

  test('isValidPostcode accepteert postcode zonder spatie', () => {
    expect(isValidPostcode('1234AB')).toBe(true);
  });

  test('validateForm geeft errors bij ongeldig formulier', () => {
    // Maak testData ongeldig
    testData.email = 'ongeldigemail.com';
    const errors = validateForm(testData);

    // Check dat er minimaal 1 error is
    expect(errors.length).toBeGreaterThan(0);
  });

  test('validateForm accepteert geldig formulier', () => {
    const errors = validateForm(testData);
    expect(errors.length).toBe(0);
  });

});