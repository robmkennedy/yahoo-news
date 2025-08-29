import { HeaderNav } from '@common/components/Header/HeaderNav/HeaderNav';
import { HeaderLogo } from '@common/components/Header/HeaderLogo/HeaderLogo';

export function Header() {
    return (
        <header>
            <HeaderLogo />
            <HeaderNav />
        </header>
    );
}
