import { ReactNode } from 'react';

import styled from '@emotion/styled';

type TitleVariant = 'title1' | 'title2' | 'large_text' | 'normal_text' | 'small_text' | 'button';

interface TitleProps {
    children: ReactNode;
    variant?: TitleVariant;
}

const Text = ({ children, variant = 'title2' }: TitleProps) => {
    return <MainText variant={variant}>{children}</MainText>;
};

const MainText = styled.h2<{ variant: 'title1' | 'title2' | 'large_text' | 'normal_text' | 'small_text' | 'button' }>`
    ${({ theme, variant }) => ({ ...theme.typography[variant] })};
    text-align: center;
`;

export default Text;
