export type Priority = 'primary' | 'secondary' | 'tertiary';

export type Severity = 'info' | 'success' | 'warning' | 'error';

export type StatusMessage = {
    message: string;
    severity?: Severity;
};
