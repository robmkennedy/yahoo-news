import logo from '@assets/images/logo.svg';
import styles from './HeaderLogo.module.css';

export function HeaderLogo() {
    return <img className={styles.headerLogo} src={logo} alt='Header Logo' />;
}
