import { SideLayout } from '@common/components/SideLayout/SideLayout';
import { SidePanel } from '@features/today/components/SidePanel/SidePanel';
import { CenterPanel } from '@features/today/components/CenterPanel/CenterPanel';

/**
 * This page shows four news-related features.
 * Headlines, Stories, Read More, and also Browser Information.
 * The page is split into a center section and a sidebar using the SideLayout component.
 */
export function TodayPage() {
    return <SideLayout center={<CenterPanel />} side={<SidePanel />} />;
}
