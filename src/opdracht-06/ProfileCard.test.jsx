import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    const heading = screen.getByText('Jan');
    expect(heading).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    // TODO: Render ProfileCard met name="Piet" en age={30}
    render(<ProfileCard name="Piet" age={30} />);
    
    // TODO: Check of tekst "Leeftijd: 30" op het scherm staat
    const ageText = screen.getByText('Leeftijd: 30');
    expect(ageText).toBeInTheDocument();
    
    // Hint: gebruik screen.getByText()
    // expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('toont de bio als die aanwezig is', () => {
    render(<ProfileCard name="Piet" age={30} bio="ik hou van programmeren" />);
    // TODO: Check of die tekst op het scherm staat
    const bioText = screen.getByText('ik hou van programmeren');
    expect(bioText).toBeInTheDocument();
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    // TODO: Render ProfileCard ZONDER bio prop
    render(<ProfileCard name="Piet" age={30} />);
    
    // TODO: Check of "Geen bio beschikbaar" op het scherm staat
    const fallbackText = screen.getByText('Geen bio beschikbaar');
    expect(fallbackText).toBeInTheDocument();
  });

});