import { HeaderLink } from '@common/components/Header/HeaderNav/HeaderLink/HeaderLink';
import aboutIcon from '@assets/images/info.svg';
import { useTranslation } from 'react-i18next';

export function HeaderNav() {
    const { t } = useTranslation('app.header.nav');

    return (
        <div>
            <HeaderLink to={'search'} icon={aboutIcon} label={t('search')} />
            <HeaderLink to={'items'} icon={aboutIcon} label={t('app.header.nav.items')} />
            <HeaderLink to={'charts'} icon={aboutIcon} label={t('app.header.nav.charts')} />
            <HeaderLink to={'about'} icon={aboutIcon} label={t('about')} />
        </div>
    );
}
