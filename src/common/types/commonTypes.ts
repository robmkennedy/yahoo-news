/**
 * Represents the hierarchy of various UI components.
 */
export type Priority = 'primary' | 'secondary' | 'tertiary';

/**
 * Indicates the importance of messages
 */
export type Severity = 'info' | 'success' | 'warning' | 'error';

/**
 * Represents a message to show to the user (if severity is required).
 */
export type StatusMessage = {
    message: string;
    severity?: Severity;
};
