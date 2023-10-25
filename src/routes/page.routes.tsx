import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ResultPage from '../pages/ResultPage';

const PageRoutes = () => {
    return (
        <>

            <BrowserRouter>

                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="/:userId" element={< ResultPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageRoutes;
