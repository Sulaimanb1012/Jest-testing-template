// formValidator.js

/**
 * Controleer of email geldig is
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Controleer of telefoonnummer geldig is
 * Geldige vormen: 0612345678 of 06-1234-5678
 * @param {string} phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  // Regex accepteert beide vormen
  return /^0\d{1}-?\d{4}-?\d{4}$/.test(phone);
}

/**
 * Controleer of postcode geldig is
 * Geldige vormen: 1234 AB of 1234AB
 * @param {string} postcode
 * @returns {boolean}
 */
export function isValidPostcode(postcode) {
  return /^\d{4}\s?[A-Za-z]{2}$/.test(postcode);
}

/**
 * Valideer een formulier object
 * @param {object} data - {email, phone, postcode}
 * @returns {string[]} array met foutmeldingen, of leeg als alles geldig
 */
export function validateForm(data) {
  const errors = [];

  if (!isValidEmail(data.email)) {
    errors.push('Ongeldig emailadres');
  }

  if (!isValidPhone(data.phone)) {
    errors.push('Ongeldig telefoonnummer');
  }

  if (!isValidPostcode(data.postcode)) {
    errors.push('Ongeldige postcode');
  }

  return errors; // altijd een array teruggeven!
}