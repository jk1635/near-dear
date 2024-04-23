import { ReactNode } from 'react';

import styled from '@emotion/styled';

interface IconProps {
    children: ReactNode;
    onClick?: () => void;
    size?: number;
    bold?: boolean;
    color?: string;
    cursor?: boolean;
}

const Icon = ({ size, bold, color, cursor, children, onClick }: IconProps) => {
    return (
        <IconWrapper
            style={{
                cursor: `${cursor ? 'pointer' : 'default'}`,
            }}
            color={color}
            size={size}
            bold={bold}
            className="material-symbols-outlined"
            onClick={onClick}
        >
            {children}
        </IconWrapper>
    );
};

const IconWrapper = styled.span<{ size?: number; bold?: boolean; color?: string; cursor?: boolean }>`
    ${({ size }) => size && `font-size: ${size}rem;`};
    ${({ bold }) => `font-weight: ${bold ? 'bold' : '400'};`}
    color: ${({ color, theme }) => (color ? color : theme.colors.black)};
    vertical-align: bottom;
`;

export default Icon;
