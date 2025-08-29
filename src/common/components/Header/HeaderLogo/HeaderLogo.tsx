import logo from '@assets/images/logo.svg';
import { useTranslation } from 'react-i18next';
import styles from './HeaderLogo.module.css';

export function HeaderLogo() {
    const { t } = useTranslation();

    return (
        <div className={styles.headerLogo}>
            <img src={logo} alt='Header Logo'/>
            <div>{t('app.header.title')}</div>
        </div>
    );
}
