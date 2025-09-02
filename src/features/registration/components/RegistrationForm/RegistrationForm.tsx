import styles from './RegistrationForm.module.css';
import { Card } from '@common/components/Card/Card';
import { useTranslation } from 'react-i18next';
import { TextInput } from '@common/components/TextInput/TextInput';
import { Button } from '@common/components/Button/Button';
import { type ChangeEvent, useState } from 'react';
import { decodeString, validateEmail } from '@/utils/formatter';
import type { StatusMessage } from '@common/types/commonTypes';
import MessageBox from '@common/components/MessageBox/MessageBox';

export function RegistrationForm() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<StatusMessage | null>(null);
    const [registrations, setRegistrations] = useState<string[]>([]);

    const handleClick = () => {
        if (!email) {
            setStatus({ severity: 'error', message: t('registration.result.required') });
        } else if (!validateEmail(email)) {
            setStatus({ severity: 'error', message: t('registration.result.invalid') });
        } else if (registrations.includes(email)) {
            setStatus({ severity: 'info', message: t('registration.result.already') });
        } else {
            setRegistrations([...registrations, email]);
            setStatus({ severity: 'success', message: t('registration.result.thanks') });
        }
    };

    let result = null;
    if (status && status.severity) {
        result = <MessageBox type={status.severity} message={status.message} />;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(null);
        setEmail(decodeString(e.target.value));
    };

    return (
        <Card>
            <div className={styles.registrationForm}>
                <h3 className={styles.registrationTitle}>{t('registration.title')}</h3>
                <div className={styles.registrationDescription}>{t('registration.description')}</div>
                <TextInput placeholder={t('registration.placeholder')} onChange={handleChange} onEnter={handleClick} />
                {result}
                <Button onClick={handleClick}>{t('registration.button')}</Button>
            </div>
        </Card>
    );
}
