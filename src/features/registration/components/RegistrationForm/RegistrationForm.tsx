import styles from './RegistrationForm.module.css';
import { Card } from '@common/components/Card/Card';
import { useTranslation } from 'react-i18next';
import { TextInput } from '@common/components/TextInput/TextInput';
import { Button } from '@common/components/Button/Button';
import { type ChangeEvent, useState } from 'react';
import { validateEmail } from '@/utils/formatter';
import type { StatusMessage } from '@common/types/commonTypes';

export function RegistrationForm() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<StatusMessage | null>(null);
    const [registrations, setRegistrations] = useState<string[]>([]);

    const handleClick = () => {
        if (!email) {
            setStatus({severity: 'error', message: 'Email address required'});
        }
        if (!validateEmail(email)) {
            setStatus({severity: 'error', message: t('registration.result.invalid')});
        }
        else if (registrations.includes(email)) {
            setStatus({severity: 'info', message: t('registration.result.already')});
        }
        else {
            setRegistrations([...registrations, email]);
            setStatus({severity: 'success', message: t('registration.result.thanks')});
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <Card>
            <div className={styles.registrationForm}>
                <div className={styles.registrationTitle}>{t('registration.title')}</div>
                <div className={styles.registrationDescription}>{t('registration.description')}</div>
                <TextInput placeholder={t('registration.placeholder')} onChange={handleChange} />
                {status && status.message}
                <Button label={t('registration.button')} onClick={handleClick} />
            </div>
        </Card>
    );
}
