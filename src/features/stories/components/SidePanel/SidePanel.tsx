import { BrowserDialog } from '@features/browser/components/BrowserDialog/BrowserDialog';
import { SideArticles } from '@features/stories/components/SidePanel/SideArticles/SideArticles';
import { RegistrationForm } from '@features/registration/components/RegistrationForm/RegistrationForm';
import styles from './SidePanel.module.css';

export function SidePanel() {
    return (
        <div className={styles.sidePanel}>
            <BrowserDialog/>
            <RegistrationForm />
            <SideArticles />
        </div>
    );
}
