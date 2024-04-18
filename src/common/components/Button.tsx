import { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react';

import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import Text from '@common/components/Text.tsx';

type ButtonVariant = 'basic' | 'gray' | 'outline' | 'disabled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    disabled?: boolean;
}

type VariantStyles = {
    variant?: ButtonVariant;
    theme: Theme;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ fullWidth = true, variant = 'basic', children, disabled, ...rest }, ref) => {
        return (
            <ButtonWrapper fullWidth={fullWidth} ref={ref} variant={variant} disabled={disabled} {...rest}>
                <Text variant="button">{children}</Text>
            </ButtonWrapper>
        );
    }
);

const variantStyles = ({ variant, theme }: VariantStyles) => {
    switch (variant) {
        case 'disabled':
            return css`
                background-color: ${theme.colors.gray};
                color: ${theme.colors.black};
            `;
        case 'outline':
            return css`
                margin-bottom: 1rem;
                padding: 1.5rem;
                border: 1px solid ${theme.colors.gray};
                border-radius: 0.75rem;
            `;
        case 'gray':
            return css`
                background-color: transparent;
                color: ${theme.colors.gray};
                ${theme.typography.button};
            `;
        default:
            return css`
                background-color: ${theme.colors.primary};
                color: ${theme.colors.black};
                height: 3.5rem;
                ${theme.typography.button};
                border-radius: 0.75rem;
            `;
    }
};

const ButtonWrapper = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    border: 0;
    text-decoration: none;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    ${variantStyles};
`;

export default Button;
