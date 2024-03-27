import { ReactNode } from 'react';

import styled from '@emotion/styled';

interface IconProps {
    size?: number;
    bold?: boolean;
    color?: string;
    children: ReactNode;
}

const Icon = ({ size, bold, color, children }: IconProps) => {
    return (
        <IconWrapper color={color}>
            <span
                style={{ fontSize: `${size}rem`, verticalAlign: 'bottom', fontWeight: `${bold ? 'bold' : '400'}` }}
                className="material-symbols-outlined"
            >
                {children}
            </span>
        </IconWrapper>
    );
};

const IconWrapper = styled.div<{ color?: string; animate?: boolean }>`
    color: ${({ color, theme }) => (color ? color : theme.colors.black)};
`;

export default Icon;
