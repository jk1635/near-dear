import { FunctionComponent, lazy } from 'react';

interface RouteConfig {
    path: string;
    Component: FunctionComponent;
    title?: string;
    showBackButton?: boolean;
    showBottomTab?: boolean;
}

const MainPage = lazy(() => import('@/pages/main/MainPage'));
const IntroPage = lazy(() => import('@pages/auth/IntroPage'));
const LoginPage = lazy(() => import('@pages/auth/LoginPage'));
const UserTypePage = lazy(() => import('@pages/auth/UserTypePage'));
const SignUpPage = lazy(() => import('@pages/auth/SignUpPage'));
const CompletePage = lazy(() => import('@pages/auth/CompletePage'));
const SearchPage = lazy(() => import('@pages/SearchPage'));
const ListPage = lazy(() => import('@pages/ListPage'));
const MyPage = lazy(() => import('@pages/user/MyPage'));
const ProfileEditPage = lazy(() => import('@pages/user/ProfileEditPage'));
const PartnerMyPage = lazy(() => import('@pages/partner/PartnerMyPage'));
const PartnerAddProductPage = lazy(() => import('@pages/partner/PartnerAddProductPage'));
const PartnerEditProfilePage = lazy(() => import('@pages/partner/PartnerEditProfilePage'));
const PaymentPage = lazy(() => import('@pages/payment/PaymentPage'));
const AddCardPage = lazy(() => import('@pages/payment/AddCardPage'));
const PaymentSuccessPage = lazy(() => import('@pages/payment/PaymentSuccessPage'));

const RouteConfig: RouteConfig[] = [
    { path: 'main', Component: MainPage, title: '메인', showBottomTab: true },
    { path: 'intro', Component: IntroPage },
    { path: 'login', Component: LoginPage, title: '로그인' },
    { path: 'userType', Component: UserTypePage, title: '회원가입', showBackButton: true },
    { path: 'signUp', Component: SignUpPage, title: '회원가입' },
    { path: 'complete', Component: CompletePage },
    { path: 'search', Component: SearchPage, showBottomTab: true },
    { path: 'list', Component: ListPage, showBottomTab: true },
    { path: 'user/my', Component: MyPage, title: '마이페이지', showBottomTab: true },
    { path: 'user/editProfile', Component: ProfileEditPage, title: '프로필 수정', showBackButton: true },
    { path: 'partner/my', Component: PartnerMyPage, title: '마이페이지' },
    { path: 'partner/addProduct', Component: PartnerAddProductPage, title: '상품 등록', showBackButton: true },
    { path: 'partner/editProfile', Component: PartnerEditProfilePage, title: '상점 수정', showBackButton: true },
    { path: 'payment', Component: PaymentPage, title: '결제하기', showBackButton: true },
    { path: 'payment/addCard', Component: AddCardPage, title: '카드 등록하기', showBackButton: true },
    { path: 'payment/success', Component: PaymentSuccessPage },
];

export default RouteConfig;
