import BottomTab from '@common/components/BottomTab.tsx';
import Header from '@common/components/Header.tsx';
import RouteConfig from '@common/router/routes.ts';

const getLayoutItems = (path: string) => {
    const route = RouteConfig.find(route => route.path === path);

    if (route) {
        return {
            title: route.title,
            showBackButton: route.showBackButton,
            showBottomTab: route.showBottomTab,
            showLogo: route.showLogo,
            showRightItems: route.showRightItems,
        };
    }

    return { title: '', showBackButton: false };
};

const Layout = ({ path, Component }: RouteConfig) => {
    const layoutItems = getLayoutItems(path);

    return (
        <>
            <Header {...layoutItems} />
            <Component />
            <BottomTab {...layoutItems} />
        </>
    );
};

export default Layout;
