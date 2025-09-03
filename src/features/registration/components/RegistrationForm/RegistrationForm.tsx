import { type ChangeEvent, useState } from 'react';
import type { StatusMessage } from '@common/types/commonTypes';
import { Card } from '@common/components/Card/Card';
import { Button } from '@common/components/Button/Button';
import { TextInput } from '@common/components/TextInput/TextInput';
import { MessageBox } from '@common/components/MessageBox/MessageBox';
import { decodeString, validateEmail } from '@common/utils/formatter';
import { useTranslation } from 'react-i18next';
import styles from './RegistrationForm.module.css';

/**
 * The form used to accept users email to register for a newsletter.
 * The common Button, TextInput, and MessageBox components are used.
 * When the signup button is clicked, the email is validated and the message displayed.
 * The form mimics actual signup by also providing a message if the email already exists.
 */
export function RegistrationForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<StatusMessage | null>(null);
    const [registrations, setRegistrations] = useState<string[]>([]);
    const { t } = useTranslation();

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
