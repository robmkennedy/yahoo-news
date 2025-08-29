import { HeaderLink } from '@common/components/Header/HeaderNav/HeaderLink/HeaderLink';
import aboutIcon from '@assets/images/about.svg';
import storiesIcon from '@assets/images/stories.svg';
import { useTranslation } from 'react-i18next';
import styles from './HeaderNav.module.css';

export function HeaderNav() {
    const { t } = useTranslation();

    return (
        <nav className={styles.headerNav}>
            <HeaderLink to={'stories'} icon={storiesIcon} label={t('app.header.nav.stories')} />
            <HeaderLink to={'about'} icon={aboutIcon} label={t('app.header.nav.about')} />
        </nav>
    );
}
