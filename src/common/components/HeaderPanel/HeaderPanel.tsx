import { Container } from '@common/components/Container/Container';
import { HeaderNav } from '@common/components/HeaderPanel/HeaderNav/HeaderNav';
import { HeaderLogo } from '@common/components/HeaderPanel/HeaderLogo/HeaderLogo';
import styles from './HeaderPanel.module.css';

export function HeaderPanel() {
    return (
        <Container className={styles.headerPanel}>
                <HeaderLogo />
                <HeaderNav />
        </Container>
    );
}
