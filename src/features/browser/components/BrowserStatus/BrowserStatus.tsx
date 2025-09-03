import { BrowserStatusGrid } from '@features/browser/components/BrowserStatus/BrowserStatusGrid/BrowserStatusGrid';
import { useTranslation } from 'react-i18next';
import { apisMap } from '@common/utils/supportedApis';
import styles from './BrowserStatus.module.css';

export function BrowserStatus() {
    const { t } = useTranslation();

    return (
        <div className={styles.browserStatus}>
            <div>
                <h4 className={styles.title}>{t('browser.config.agent')}</h4>
                <span>{navigator.userAgent}</span>
            </div>
            <BrowserStatusGrid title={t('browser.config.apis')} statuses={apisMap} />
        </div>
    );
}
