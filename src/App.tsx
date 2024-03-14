import { Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Global, ThemeProvider } from '@emotion/react';

import Layout from '@common/components/Layout';
import Loading from '@common/components/Loading.tsx';
import ScrollToTop from '@common/components/ScrollToTop.tsx';
import PageHeader from '@common/router/header.tsx';
import RouteConfig from '@common/router/routes.ts';
import global from '@common/styles/global';
import reset from '@common/styles/reset';
import theme from '@common/styles/theme';

import { GlobalPortal } from '@/GlobalPortal';

import NotFoundPage from '@pages/NotFoundPage.tsx';

function App() {
    return (
        <GlobalPortal.Provider>
            <ThemeProvider theme={theme}>
                <Global styles={[reset, global]} />
                <Layout>
                    <BrowserRouter>
                        <ScrollToTop />
                        <Suspense fallback={<Loading />}>
                            <Routes>
                                {RouteConfig.map(({ path, Component }) => (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={<PageHeader Component={Component} path={path} />}
                                    />
                                ))}
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </Layout>
            </ThemeProvider>
        </GlobalPortal.Provider>
    );
}

export default App;
