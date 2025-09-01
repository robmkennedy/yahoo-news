import { useState } from 'react';
import { Button } from '@common/components/Button/Button';
import { ModalDialog } from '@common/components/ModalDialog/ModalDialog';
import { BrowserStatus } from '@features/browser/components/BrowserStatus/BrowserStatus';
import { useTranslation } from 'react-i18next';

export function BrowserDialog() {
    const { t } = useTranslation();
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleClose = () => {
        setDialogOpen(false);
    }

    const handleOpen = () => {
        setDialogOpen(true);
    }

    return (
        <>
            <Button priority='secondary' onClick={handleOpen}>{t('browser.button')}</Button>
            <ModalDialog title={t('browser.title')} isOpen={isDialogOpen} onClose={handleClose}>
                <BrowserStatus/>
            </ModalDialog>
        </>
    );
}
