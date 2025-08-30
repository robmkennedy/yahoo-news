import type { ReactNode } from 'react';
import styles from './SideLayout.module.css';

type SideLayoutProps = {
    center: ReactNode;
    side: ReactNode;
};

export function SideLayout({ center, side }: SideLayoutProps) {
    return (
        <div className={styles.sideLayout}>
            <section className={styles.center}>
                {center}
            </section>
            <aside className={styles.side}>
                {side}
            </aside>
        </div>
    );
}
