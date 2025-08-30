import { MainPanel } from '@common/components/MainPanel/MainPanel';
import { HeaderPanel } from '@common/components/HeaderPanel/HeaderPanel';
import { Footer } from '@common/components/Footer/Footer';
import './App.css';

export function App() {
    return (
        <>
            <header>
                <HeaderPanel />
            </header>
            <main>
                <MainPanel />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
