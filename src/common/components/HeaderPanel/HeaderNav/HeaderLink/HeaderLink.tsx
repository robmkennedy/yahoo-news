import { NavLink } from 'react-router';
import styles from './HeaderLink.module.css';

type HeaderLinkProps = {
    to: string;
    label: string;
};

export function HeaderLink({ to, label }: HeaderLinkProps) {
    return (
        <NavLink className={styles.headerLink} to={to}>
            {label}
        </NavLink>
    );
}
