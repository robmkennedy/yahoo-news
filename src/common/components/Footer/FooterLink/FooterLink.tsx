import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

type FooterLinkProps = {
    to: string;
    label: string;
    icon: ReactNode;
};

export function FooterLink({ to, label, icon }: FooterLinkProps) {
    return (
        <NavLink to={to}>{icon}{label}</NavLink>
    );
}
