import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';

jest.mock('react-i18next', () => ({
    useTranslation: () => (Component: React.FC) => {
        Component.defaultProps = {
            ...Component.defaultProps,
            t: (key: any) => key,
        };
        return Component;
    },
}));

describe('<App />', () => {
    it('renders header', () => {
        render(<App />);
        const el = screen.getByText(/hello react/i);
        expect(el).toBeInTheDocument();
        screen.debug();
    });
});
