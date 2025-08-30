import { Page } from '@/common/components/Page/Page';
import { SideLayout } from '@common/components/SideLayout/SideLayout';
import { CenterPanel } from '@features/stories/components/CenterPanel/CenterPanel';
import { SidePanel } from '@features/stories/components/SidePanel/SidePanel';
import { Container } from '@common/components/Container/Container';

/**
 * The home page of the application. It presents a search bar to the user allowing
 * them to search for a particular movie based on title. IF a movie is found, the poster
 * and detail information for the movie is displayed beneath the search bar.
 */
export function StoriesPage() {
    return (
        <Container>
        <SideLayout center={<CenterPanel/>} side={<SidePanel/>}>
        </SideLayout>
        </Container>
    );
}
