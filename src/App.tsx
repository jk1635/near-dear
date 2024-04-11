import { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Global, ThemeProvider } from '@emotion/react';

import Loading from '@common/components/Loading.tsx';
import ScrollToTop from '@common/components/ScrollToTop.tsx';
import Layout from '@common/router/layout.tsx';
import RouteConfig from '@common/router/routes.ts';
import global from '@common/styles/global';
import reset from '@common/styles/reset';
import theme from '@common/styles/theme';

import { GlobalPortal } from '@/GlobalPortal';

const NotFoundPage = lazy(() => import('@pages/error/NotFoundPage.tsx'));

function App() {
    return (
        <GlobalPortal.Provider>
            <ThemeProvider theme={theme}>
                <Global styles={[reset, global]} />
                <BrowserRouter>
                    <Suspense fallback={<Loading />}>
                        <ScrollToTop />
                        <Routes>
                            {RouteConfig.map(({ path, Component }) => (
                                <Route key={path} path={path} element={<Layout Component={Component} path={path} />} />
                            ))}
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </ThemeProvider>
        </GlobalPortal.Provider>
    );
}

export default App;
