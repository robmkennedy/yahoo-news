import { type PropsWithChildren, useEffect, useRef } from 'react';
import { Button } from '@common/components/Button/Button';
import { useTranslation } from 'react-i18next';
import styles from './ModalDialog.module.css';

type ModalDialogProps = PropsWithChildren & {
    title: string;
    isOpen: boolean;
    onClose: () => void;
};

/**
 * A modal dialog that restricts background usage when shown. Uses the html standard <dialog> tag.
 * Can also be cancelled by clicking the Close button or the escape key.
 * @param title - the test to show at the top of the dialog
 * @param isOpen - opens or closes the dialog window
 * @param onClose - a callback that triggers when the dialog is closed
 * @param children - the content to show within the dialog
 */
export function ModalDialog({ title, isOpen, onClose, children }: ModalDialogProps) {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen]);

    return (
        <dialog ref={dialogRef} className={`${styles.modalDialog}`} onCancel={onClose}>
            <h3 className={styles.modalDialogTitle}>{title}</h3>
            <div className={styles.modalDialogContent}>{children}</div>
            <div className={styles.modalDialogFooter}>
                <Button priority='secondary' onClick={onClose}>
                    {t('common.close')}
                </Button>
            </div>
        </dialog>
    );
}
