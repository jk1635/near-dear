import { FunctionComponent, lazy } from 'react';

interface RouteConfig {
    path: string;
    Component: FunctionComponent;
    title?: string;
    showBackButton?: boolean;
    showBottomTab?: boolean;
}

const MainPage = lazy(() => import('@pages/common/MainPage'));
const IntroPage = lazy(() => import('@pages/common/IntroPage'));
const SearchPage = lazy(() => import('@pages/common/SearchPage'));
const ListPage = lazy(() => import('@pages/common/ListPage'));
const DetailPage = lazy(() => import('@pages/common/DetailPage'));

const LoginPage = lazy(() => import('@pages/auth/LoginPage'));
const AccountTypePage = lazy(() => import('@pages/auth/AccountTypePage'));
const SignUpPage = lazy(() => import('@pages/auth/SignUpPage'));
const SignUpStatusPage = lazy(() => import('@pages/auth/SignUpStatusPage'));

const MyPage = lazy(() => import('@pages/user/UserMyPage'));
const UserProfilePage = lazy(() => import('@pages/user/UserProfilePage'));

const PartnerMyPage = lazy(() => import('@pages/partner/PartnerMyPage'));
const PartnerProductPage = lazy(() => import('@pages/partner/PartnerProductPage'));
const PartnerProfilePage = lazy(() => import('@pages/partner/PartnerProfilePage'));

const PaymentPage = lazy(() => import('@pages/payment/PaymentPage'));
const PaymentCardPage = lazy(() => import('@pages/payment/PaymentCardPage'));
const PaymentStatusPage = lazy(() => import('@pages/payment/PaymentStatusPage'));

const RouteConfig: RouteConfig[] = [
    { path: '/', Component: IntroPage },
    { path: 'main', Component: MainPage, title: '메인', showBottomTab: true },
    { path: 'login', Component: LoginPage, title: '로그인' },
    { path: 'accountType', Component: AccountTypePage, showBackButton: true },
    { path: 'signup/:type', Component: SignUpPage, title: '회원가입', showBackButton: true },
    { path: 'complete/:type', Component: SignUpStatusPage },
    { path: 'detail', Component: DetailPage, title: '상품 상세', showBackButton: true },
    { path: 'search', Component: SearchPage, showBottomTab: true },
    { path: 'list', Component: ListPage, showBottomTab: true },
    { path: 'user/my', Component: MyPage, title: '마이페이지', showBottomTab: true },
    { path: 'user/profile', Component: UserProfilePage, title: '프로필 수정', showBackButton: true },
    { path: 'partner/my', Component: PartnerMyPage, title: '마이페이지' },
    { path: 'partner/profile', Component: PartnerProfilePage, title: '상점 수정', showBackButton: true },
    { path: 'partner/product', Component: PartnerProductPage, title: '상품 등록', showBackButton: true },
    { path: 'payment', Component: PaymentPage, title: '결제하기', showBackButton: true },
    { path: 'payment/card', Component: PaymentCardPage, title: '카드 등록하기', showBackButton: true },
    { path: 'payment/status', Component: PaymentStatusPage },
];

export default RouteConfig;
