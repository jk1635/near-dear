import { ReactNode } from 'react';

import styled from '@emotion/styled';

interface BasicContainerProps {
    children: ReactNode;
    isCentered?: boolean;
}

const Container = ({ children, isCentered = false }: BasicContainerProps) => {
    const ContainerBox = isCentered ? CenterContainer : BasicContainer;

    return <ContainerBox>{children}</ContainerBox>;
};

const BasicContainer = styled.div`
    padding-top: 3.5rem;
    padding-bottom: 6rem;
`;

const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export default Container;
