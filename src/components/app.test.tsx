import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';

describe('<App />', () => {
    it('renders header', () => {
        render(<App />);
        const el = screen.getByText(/react/i);
        expect(el).toBeInTheDocument();
    });
});
