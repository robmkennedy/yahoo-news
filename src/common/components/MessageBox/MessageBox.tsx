import type { Severity } from '@common/types/commonTypes';
import { infoIcon, errorIcon, successIcon, warningIcon } from '@assets/images/icons';
import styles from './MessageBox.module.css';

type MessageBoxProps = {
    type: Severity;
    message: string;
};

const iconMap = {
    info: infoIcon,
    error: errorIcon,
    success: successIcon,
    warning: warningIcon
};

/**
 * Displays a message to the user. An icon corresponding to the message severity is displayed before the text.
 * @param type - indicates if the message is good, bad, or a warning
 * @param message - the message text to show
 */
export function MessageBox({ type, message }: MessageBoxProps) {
    const icon = iconMap[type];
    return (
        <div className={`${styles.messageBox}`}>
            <div className={`${styles.messageBoxText} ${type}`}>
                {icon}
                <span>{message}</span>
            </div>
        </div>
    );
}
