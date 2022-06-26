import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const App: FunctionComponent = () => {
    const { t } = useTranslation();
    return <h1>{t('header')}</h1>;
};

export default App;
