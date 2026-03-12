import { render, screen, fireEvent } from '@testing-library/react';
import LikeButton from './LikeButton';

describe('LikeButton', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont initiële aantal likes', () => {
    render(<LikeButton initialLikes={5} />);
    expect(screen.getByText('5 likes')).toBeInTheDocument();
  });

  test('verhoogt likes bij klik', () => {
    // TODO: Render LikeButton met initialLikes={0}
    render(<LikeButton initialLikes={0} />);
    // TODO: Vind de button (Hint: screen.getByRole('button'))
    const button = screen.getByRole('button');
    // TODO: Klik op de button (Hint: fireEvent.click(button))
    fireEvent.click(button);
    // TODO: Check of "1 likes" op het scherm staat
    const likesText = screen.getByText('1 likes');
    expect(likesText).toBeInTheDocument();
   // expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('verlaagt likes bij tweede klik', () => {
    // TODO: Render LikeButton
    render(<LikeButton initialLikes={0} />);
    // TODO: Klik 2x op de button
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    // TODO: Check of we terug zijn bij "0 likes"
    const likesText = screen.getByText('0 likes');
    expect(likesText).toBeInTheDocument();
    // expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('toont rood hartje als geliked', () => {
    // TODO: Render LikeButton
    render(<LikeButton initialLikes={0} />);
    // TODO: Klik op de button
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // TODO: Check of de button tekst "❤️ Like" bevat
    // Hint: screen.getByText(/❤️ Like/)
    const likedButton = screen.getByText(/❤️ Like/);
    expect(likedButton).toBeInTheDocument();
    // expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

});
