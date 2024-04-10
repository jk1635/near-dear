import React from 'react';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from '@/App.tsx';

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: error => {
            console.error(`문제가 발생했습니다. ${error.message}`);
        },
    }),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </QueryClientProvider>
    </React.StrictMode>
);
