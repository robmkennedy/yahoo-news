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
 * A common component used to display a message to the user.
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
