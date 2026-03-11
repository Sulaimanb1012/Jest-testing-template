import { validatePassword } from './passwordValidator';

describe('Password Validator', () => {
  
  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: geldig wachtwoord geeft isValid true', () => {
    const result = validatePassword('Welkom123');
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  test('te kort wachtwoord geeft error', () => {
    // TODO: Test of 'Test1' invalid is
    // Hint: check of isValid false is
    const result = validatePassword('Test1');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Minimaal 8 karakters');
  });

  test('wachtwoord zonder nummer geeft error', () => {
    // TODO: Test of 'Welkomtestje' invalid is
    const result = validatePassword('Welkomtestje');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Moet minimaal 1 nummer bevatten');
  });

  test('wachtwoord zonder hoofdletter geeft error', () => {
    // TODO: Test of 'welkom123' invalid is
    const result = validatePassword('welkom123');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Moet minimaal 1 hoofdletter bevatten');
  });

  test('errors array bevat juiste foutmeldingen', () => {
    // TODO: Test of 'test' meerdere errors teruggeeft
    // Hint: gebruik .toContain() om te checken of een error in de array zit
    const result = validatePassword('test');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Minimaal 8 karakters');
    expect(result.errors).toContain('Moet minimaal 1 hoofdletter bevatten');
    expect(result.errors).toContain('Moet minimaal 1 nummer bevatten');
  });

});