import { ReactNode } from 'react';

import styled from '@emotion/styled';

type TitleVariant = 't1' | 't2' | 't3' | 't4';

interface TitleProps {
    children: ReactNode;
    variant?: TitleVariant;
}

const Text = ({ children, variant = 't2' }: TitleProps) => {
    return <MainText variant={variant}>{children}</MainText>;
};

const MainText = styled.h2<{ variant: 't1' | 't2' | 't3' | 't4' }>`
    ${({ theme, variant }) => ({ ...theme.typography[variant] })};
    text-align: center;
`;

export default Text;
