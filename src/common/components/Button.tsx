import { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react';

import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

type ButtonVariant = 'basic' | 'gray' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    fullWidth?: boolean;
}

type VariantStyles = {
    variant?: ButtonVariant;
    theme: Theme;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ fullWidth = true, variant = 'basic', children, ...rest }, ref) => {
        return (
            <ButtonWrapper fullWidth={fullWidth} ref={ref} variant={variant} {...rest}>
                <span>{children}</span>
            </ButtonWrapper>
        );
    }
);

const variantStyles = ({ variant, theme }: VariantStyles) => {
    switch (variant) {
        case 'outline':
            return {
                marginBottom: '1rem',
                padding: '1.5rem',
                border: `1px solid ${theme.colors.gray}`,
                backgroundColor: theme.colors.white,
                ...theme.typography.t6,
                '&:last-of-type': {
                    marginBottom: '0',
                },
                '&:hover': {
                    backgroundColor: theme.colors.gray,
                },
            };
        case 'gray':
            return {
                backgroundColor: 'transparent',
                color: theme.colors.gray,
                ...theme.typography.caption,
            };
        default:
            return {
                backgroundColor: theme.colors.primary,
                color: theme.colors.black,
                height: '3.5rem',
                ...theme.typography.button,
            };
    }
};

const ButtonWrapper = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    border: 0;
    border-radius: 0.75rem;
    cursor: pointer;
    text-decoration: none;
    ${variantStyles};
`;

export default Button;
