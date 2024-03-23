import { ReactNode } from 'react';

import styled from '@emotion/styled';

interface BasicContainerProps {
    children: ReactNode;
    isCentered?: boolean;
}

const Container = ({ children, isCentered = false }: BasicContainerProps) => {
    const ContainerBox = isCentered ? CenterContainer : BasicContainer;

    return (
        <LayoutContainer>
            <ContainerBox>{children}</ContainerBox>
        </LayoutContainer>
    );
};

const LayoutContainer = styled.main`
    min-width: var(--min-width);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
`;

const BasicContainer = styled.div`
    padding-top: 3.5rem;
    padding-bottom: 6rem;
`;

const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 5.5rem);
`;

export default Container;
