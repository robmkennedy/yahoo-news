import { MainPanel } from '@common/components/MainPanel/MainPanel';
import { HeaderPanel } from '@common/components/HeaderPanel/HeaderPanel';
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
        </>
    );
}
