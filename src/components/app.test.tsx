import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<App />', () => {
    it('renders header', async () => {
        render(<App />);
        const el = screen.getByText(/header/i);
        expect(el).toBeInTheDocument();
    });
});
