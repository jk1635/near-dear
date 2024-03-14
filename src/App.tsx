import { Suspense, useEffect } from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { Global, ThemeProvider } from '@emotion/react';

import Layout from '@common/components/Layout';
import Loading from '@common/components/Loading.tsx';
import global from '@common/styles/global';
import reset from '@common/styles/reset';
import theme from '@common/styles/theme';

import { GlobalPortal } from '@/GlobalPortal';

import JoinPage from '@pages/JoinPage.tsx';
import ListDetailPage from '@pages/ListDetailPage.tsx';
import ListPage from '@pages/ListPage.tsx';
import LoginPage from '@pages/LoginPage.tsx';
import MainPage from '@pages/MainPage.tsx';
import MyPage from '@pages/MyPage.tsx';
import PaymentPage from '@pages/PaymentPage.tsx';

function App() {
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    return (
        <GlobalPortal.Provider>
            <ThemeProvider theme={theme}>
                <Global styles={[reset, global]} />
                <Layout>
                    <BrowserRouter>
                        <Suspense fallback={<Loading />}>
                            <ScrollToTop />
                            <Routes>
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/main" element={<MainPage />} />
                                <Route path="/join" element={<JoinPage />} />
                                <Route path="/list" element={<ListPage />} />
                                <Route path="/listDetail" element={<ListDetailPage />} />
                                <Route path="/payment" element={<PaymentPage />} />
                                <Route path="/my" element={<MyPage />} />
                                {/*<Route path="/*" element={<NotFound />} />*/}
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </Layout>
            </ThemeProvider>
        </GlobalPortal.Provider>
    );
}

export default App;
