import type { ReactNode } from 'react';
import styles from './SideLayout.module.css';

type SideLayoutProps = {
    center: ReactNode;
    side: ReactNode;
};

/**
 * Used to layout child components within two sections.
 * Consists of the center section and the sidebar section to the right.
 * @param center - the content of the center section
 * @param side - the content of the sidebar section
 */
export function SideLayout({ center, side }: SideLayoutProps) {
    return (
        <div className={styles.sideLayout}>
            <section className={styles.center}>{center}</section>
            <aside className={styles.side}>{side}</aside>
        </div>
    );
}
