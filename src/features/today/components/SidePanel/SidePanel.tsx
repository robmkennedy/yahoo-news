import { BrowserDialog } from '@features/browser/components/BrowserDialog/BrowserDialog';
import { MoreArticles } from '@features/today/components/MoreArticles/MoreArticles';
import { RegistrationForm } from '@features/registration/components/RegistrationForm/RegistrationForm';
import styles from './SidePanel.module.css';

/**
 * The sidebar of the app displayed to the right.
 * Contains the browser information dialog, the more articles section, and the registration form.
 */
export function SidePanel() {
    return (
        <div className={styles.sidePanel}>
            <BrowserDialog />
            <MoreArticles />
            <RegistrationForm />
        </div>
    );
}
