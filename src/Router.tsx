import { Routes, Route } from 'react-router-dom';
import MainPages from './pages/MainPages';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<MainPages />} />
        </Routes>
    );
}

export default Router;