import { useTranslation } from 'react-i18next';
import { FooterLink } from '@common/components/Footer/FooterLink/FooterLink';
import aboutIcon from '@assets/images/info.svg';

export function Footer() {
    const { t } = useTranslation();

    return (
        <div>
            <FooterLink to={'search'} icon={aboutIcon} label={t('app.header.nav.search')} />
            <FooterLink to={'items'} icon={aboutIcon} label={t('app.header.nav.items')} />
            <FooterLink to={'charts'} icon={aboutIcon} label={t('app.header.nav.charts')} />
            <FooterLink to={'about'} icon={aboutIcon} label={t('app.header.nav.about')} />
        </div>
    );
}
