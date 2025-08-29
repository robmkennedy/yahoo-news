import type { PropsWithChildren } from 'react';

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function Page({children}: PropsWithChildren) {

    return (
        <div>{children}</div>
    );
}