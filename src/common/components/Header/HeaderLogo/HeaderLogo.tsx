import logo from '@assets/images/logo.svg';
import { useTranslation } from 'react-i18next';

export function HeaderLogo() {
    const { t } = useTranslation();

    return (
        <div>
            <img src={logo} />
            <div>{t('app.header.title')}</div>
        </div>
    );
}
