import styles from './CardTitle.module.css';

type CardTitleProps = {
    text: string;
};

export function CardTitle({ text }: CardTitleProps) {
    return (
        <div className={`${styles.cardTitle}`}>
            <div className={`${styles.cardTitleTag}`} />
            <div className={`${styles.cardTitleText}`}>{text}</div>
        </div>
    );
}
