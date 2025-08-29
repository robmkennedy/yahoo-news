import { useTranslation } from 'react-i18next';
import { FooterLink } from '@common/components/Footer/FooterLink/FooterLink';
import aboutIcon from '@assets/images/about.svg';
import styles from './Footer.module.css';

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <FooterLink to={'search'} icon={aboutIcon} label={t('app.header.nav.search')} />
            <FooterLink to={'about'} icon={aboutIcon} label={t('app.header.nav.about')} />
        </footer>
    );
}
