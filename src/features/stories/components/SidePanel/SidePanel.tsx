import { MoreArticles } from '@features/stories/components/MoreArticles/MoreArticles';
import { BrowserButton } from '@features/browser/components/BrowserButton/BrowserButton';
import { RegistrationForm } from '@features/registration/components/RegistrationForm/RegistrationForm';
import styles from './SidePanel.module.css';

export function SidePanel() {
    return (
        <div className={styles.sidePanel}>
            <BrowserButton />
            <MoreArticles />
            <RegistrationForm />
        </div>
    );
}
