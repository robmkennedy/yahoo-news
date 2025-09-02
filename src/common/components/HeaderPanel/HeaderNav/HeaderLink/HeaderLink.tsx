import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import styles from './HeaderLink.module.css';

type HeaderLinkProps = {
    to: string;
    label: string;
    icon: ReactNode;
};

export function HeaderLink({ to, label, icon }: HeaderLinkProps) {
    return (
        <NavLink className={styles.headerLink} to={to}>
            {icon}{label}
        </NavLink>
    );
}
