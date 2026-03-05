import {getRank, addScores, hasWon, getHighScore} from './gameUtils';

test('getRank geeft de juiste rang terug', () => {
const result = getRank(0);
expect(result).toBe('Noob');
});

test('getRank geeft de juiste rang terug', () => {
const result = getRank(50);
expect(result).toBe('Pro');
});

//test add scores met 20 en 30 en verwacht 50
test('addScores telt twee scores bij elkaar op', () => {
const result = addScores(20, 30);
expect(result).toBe(50);
});
