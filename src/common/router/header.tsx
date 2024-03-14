import Header from '@common/components/Header.tsx';
import RouteConfig from '@common/router/routes.ts';

const getHeaderItems = (path: string) => {
    const route = RouteConfig.find(route => route.path === path);

    if (route) {
        return { title: route.title, showBackButton: route.showBackButton };
    }

    return { title: '', showBackButton: false };
};

const PageHeader = ({ path, Component }: RouteConfig) => {
    const headerItems = getHeaderItems(path);
    return (
        <>
            <Header {...headerItems} />
            <Component />
        </>
    );
};

export default PageHeader;
