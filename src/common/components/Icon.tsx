import { ReactNode } from 'react';

import styled from '@emotion/styled';

interface IconProps {
    size?: number;
    bold?: boolean;
    color?: string;
    children: ReactNode;
    onClick?: () => void;
    cursor?: boolean;
}

const Icon = ({ size, bold, color, children, onClick, cursor }: IconProps) => {
    return (
        <IconWrapper
            color={color}
            style={{
                fontSize: `${size}rem`,
                verticalAlign: 'bottom',
                fontWeight: `${bold ? 'bold' : '400'}`,
                cursor: `${cursor ? 'pointer' : 'default'}`,
            }}
            className="material-symbols-outlined"
            onClick={onClick}
        >
            {children}
        </IconWrapper>
    );
};

const IconWrapper = styled.span<{ color?: string; cursor?: boolean }>`
    color: ${({ color, theme }) => (color ? color : theme.colors.black)};
`;

export default Icon;
