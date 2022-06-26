import React from 'react';
import App from './components/app';
import { createRoot } from 'react-dom/client';
import './i18n';
import './web.config';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const appRoot = document.getElementById('app');
const root = createRoot(appRoot as HTMLElement);
root.render(
    <React.StrictMode>
        <React.Suspense fallback="loading">
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </React.Suspense>
    </React.StrictMode>
);
