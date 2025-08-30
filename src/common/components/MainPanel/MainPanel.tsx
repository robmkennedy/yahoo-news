import { Outlet } from 'react-router';
import { Container } from '@common/components/Container/Container';
import styles from './MainPanel.module.css';

export function MainPanel() {
    return (
        <Container className={styles.mainPanel}>
            <Outlet />
        </Container>
    );
}
