import { FunctionComponent } from 'react';

import CompletePage from '@pages/auth/CompletePage.tsx';
import IntroPage from '@pages/auth/IntroPage.tsx';
import LoginPage from '@pages/auth/LoginPage.tsx';
import SignUpPage from '@pages/auth/SignUpPage.tsx';
import ListPage from '@pages/ListPage.tsx';
import MainPage from '@pages/MainPage.tsx';
import PartnerAddProductPage from '@pages/partner/PartnerAddProductPage.tsx';
import PartnerEditProfilePage from '@pages/partner/PartnerEditProfilePage.tsx';
import PartnerMyPage from '@pages/partner/PartnerMyPage.tsx';
import AddCardPage from '@pages/payment/AddCardPage.tsx';
import PaymentPage from '@pages/payment/PaymentPage.tsx';
import PaymentSuccessPage from '@pages/payment/PaymentSuccessPage.tsx';
import SearchPage from '@pages/SearchPage.tsx';
import MyPage from '@pages/user/MyPage.tsx';
import ProfileEditPage from '@pages/user/ProfileEditPage.tsx';

interface RouteConfig {
    path: string;
    Component: FunctionComponent;
    title?: string;
    showBackButton?: boolean;
}

const RouteConfig: RouteConfig[] = [
    { path: 'main', Component: MainPage, title: '메인' },
    { path: 'intro', Component: IntroPage },
    { path: 'login', Component: LoginPage, title: '로그인' },
    { path: 'signUp', Component: SignUpPage, title: '회원가입' },
    { path: 'complete', Component: CompletePage },
    { path: 'search', Component: SearchPage },
    { path: 'list', Component: ListPage },
    { path: 'user/my', Component: MyPage, title: '마이페이지' },
    { path: 'user/editProfile', Component: ProfileEditPage, title: '프로필 수정', showBackButton: true },
    { path: 'partner/my', Component: PartnerMyPage, title: '마이페이지' },
    { path: 'partner/addProduct', Component: PartnerAddProductPage, title: '상품 등록', showBackButton: true },
    { path: 'partner/editProfile', Component: PartnerEditProfilePage, title: '상점 수정', showBackButton: true },
    { path: 'payment', Component: PaymentPage, title: '결제하기', showBackButton: true },
    { path: 'payment/addCard', Component: AddCardPage, title: '카드 등록하기', showBackButton: true },
    { path: 'payment/success', Component: PaymentSuccessPage },
];

export default RouteConfig;
