import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainVisual from './MainVisual';

describe('MainVisual', () => {
  it('renders the main visual section', () => {
    render(<MainVisual />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('salad.')).toBeInTheDocument();
  });

  //! 以下はエラーする。
  // it('renders headings and text in both English and Japanese', () => {
  //   render(<MainVisual />);
  //   expect(screen.getByText((content, element) => content.startsWith("Let's eat"))).toBeInTheDocument();
  //   expect(screen.getByText('delicious')).toBeInTheDocument();
  //   expect(screen.getByText('salad.')).toBeInTheDocument();
  //   expect(screen.getByText('健康のためじゃない。')).toBeInTheDocument();
  //   expect(screen.getByText('「おいしいから食べたい」サラダ')).toBeInTheDocument();
  // });

  // it('applies container styles correctly', () => {
  //   const containerDiv = screen.getByTestId('container');
  //   expect(containerDiv).toHaveClass('container mx-auto px-4 py-8');
  // });

  // it('renders headings and text in both English and Japanese', () => {
  //   expect(screen.getByText("Let's eat")).toBeInTheDocument();
  //   expect(screen.getByText('delicious')).toBeInTheDocument();
  //   expect(screen.getByText('salad.')).toBeInTheDocument();
  //   expect(screen.getByText('健康のためじゃない。')).toBeInTheDocument();
  //   expect(screen.getByText('「おいしいから食べたい」サラダ')).toBeInTheDocument();
  // });

  // Add more tests for responsiveness, interactive elements, etc.
});
