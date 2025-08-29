import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import styles from './HeaderLink.module.css';

type HeaderLinkProps = {
    to: string;
    label: string;
    icon: string;
};

export function HeaderLink({ to, label, icon }: HeaderLinkProps) {
    return (
        <NavLink to={to}><img src={icon}/>{label}</NavLink>
    );
}
