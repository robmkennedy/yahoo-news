import { SideLayout } from '@common/components/SideLayout/SideLayout';
import { SidePanel } from '@features/today/components/SidePanel/SidePanel';
import { CenterPanel } from '@features/today/components/CenterPanel/CenterPanel';

/**
 * The home page of the application. It presents a search bar to the user allowing
 * them to search for a particular movie based on title. IF a movie is found, the poster
 * and detail information for the movie is displayed beneath the search bar.
 */
export function TodayPage() {
    return <SideLayout center={<CenterPanel />} side={<SidePanel />} />;
}
