import { HeaderLink } from '@common/components/HeaderPanel/HeaderNav/HeaderLink/HeaderLink';
import { useTranslation } from 'react-i18next';
import { storiesIcon, aboutIcon } from '@/assets/images/icons';
import styles from './HeaderNav.module.css';

export function HeaderNav() {
    const { t } = useTranslation();

    return (
        <nav className={styles.headerNav}>
            <HeaderLink to={'stories'} label={t('app.header.nav.stories')} icon={storiesIcon} />
            <HeaderLink to={'about'} label={t('app.header.nav.about')} icon={aboutIcon} />
        </nav>
    );
}
