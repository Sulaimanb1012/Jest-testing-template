import { calculateTotalScore, calculatePercentage, isPassed, getGrade, countWrongAnswers } from './quizScore';

describe('Quiz Score', () => {
  let quizAnswers;

  beforeEach(() => {
    // TODO: Maak hier een array met quiz antwoorden
    quizAnswers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: true, points: 10 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: false, points: 0 }
    ];
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: calculateTotalScore telt punten op', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 15 }
    ];
    expect(calculateTotalScore(answers)).toBe(25);
  });

  test('calculatePercentage berekent juiste percentage', () => {
    // TODO: Gebruik quizAnswers uit beforeEach
    // TODO: Met 4 van 5 goed moet het 80% zijn
    // Hint: Je moet eerst beforeEach invullen!
    expect(calculatePercentage(quizAnswers)).toBe(80);
  });

  test('isPassed geeft true bij 60% of hoger', () => {
    // TODO: Gebruik quizAnswers (80% goed)
    // TODO: Check of isPassed true teruggeeft
    expect(isPassed(quizAnswers)).toBe(true);
  });

  test('isPassed geeft false bij lager dan 60%', () => {
    // TODO: Maak nieuwe answers array met 50% goed
    const lowScore = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: false, points: 0 },
      { question: 3, isCorrect: false, points: 0 },
      { question: 4, isCorrect: false, points: 0 },
      { question: 5, isCorrect: false, points: 0 }
    ];
    // TODO: Check of isPassed false teruggeeft
    expect(isPassed(lowScore)).toBe(false);
  });

  test('getGrade geeft Excellent bij 90%+', () => {
    // TODO: Maak answers met 90% of meer goed
    const highScore = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: true, points: 10 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 }
    ];
    // TODO: Check of getGrade 'Excellent' teruggeeft
    expect(getGrade(highScore)).toBe('Excellent');
  });

  test('getGrade geeft Goed bij 75-89%', () => {
    // TODO: Gebruik quizAnswers (80% goed)
    // TODO: Check of getGrade 'Goed' teruggeeft
    expect(getGrade(quizAnswers)).toBe('Goed');
  });

  test('countWrongAnswers telt foute antwoorden', () => {
    // TODO: Gebruik quizAnswers (1 fout antwoord)
    // TODO: Check of countWrongAnswers 1 teruggeeft
    expect(countWrongAnswers(quizAnswers)).toBe(1);
  });

});