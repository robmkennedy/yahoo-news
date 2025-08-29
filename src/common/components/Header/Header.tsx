import { HeaderNav } from '@common/components/Header/HeaderNav/HeaderNav';
import { HeaderLogo } from '@common/components/Header/HeaderLogo/HeaderLogo';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <HeaderLogo />
            <HeaderNav />
        </header>
    );
}
