import { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react';

import styled from '@emotion/styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...rest }, ref) => {
    return (
        <ButtonWrapper ref={ref} {...rest}>
            <Label>{children}</Label>
        </ButtonWrapper>
    );
});

const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    width: 100%;
    height: 3.5rem;
    padding: 0 1.5rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`;

const Label = styled.span`
    color: ${({ theme }) => theme.colors.black};
    font-size: 0.875rem;
    font-weight: bold;
    text-decoration: none;
`;

export default Button;
