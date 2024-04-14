import { ReactNode } from 'react';

import styled from '@emotion/styled';

type TitleVariant = 'title1' | 'title2' | 'large_text' | 'normal_text' | 'small_text' | 'button';

interface TitleProps {
    children: ReactNode;
    variant?: TitleVariant;
    isCentered?: boolean;
    bold?: boolean;
}

const Text = ({ children, variant = 'normal_text', isCentered = false, bold = false }: TitleProps) => {
    return (
        <MainText variant={variant} isCentered={isCentered} bold={bold}>
            {children}
        </MainText>
    );
};

const MainText = styled.h2<{ variant: TitleVariant; isCentered: boolean; bold: boolean }>`
    ${({ theme, variant }) => ({ ...theme.typography[variant] })};
    ${({ isCentered }) => isCentered && 'text-align: center;'};
    ${({ bold }) => bold && 'font-weight: bold;'};
`;

export default Text;
