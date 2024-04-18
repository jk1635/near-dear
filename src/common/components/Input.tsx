import { forwardRef } from 'react';

import styled from '@emotion/styled';

interface InputProps {
    label: string;
    placeholder?: string;
    type?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, placeholder, type = 'text', error, ...rest }, ref) => {
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <InputBox autoComplete="off" placeholder={placeholder} type={type} ref={ref} {...rest} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputWrapper>
    );
});

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 0.25rem;
`;

const Label = styled.label`
    padding-left: 0.25rem;
    ${({ theme }) => ({ ...theme.typography.small_text })};
`;

const InputBox = styled.input`
    margin: 0.25rem 0 1rem 0;
    padding: 0.625rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 0.5rem;
    box-sizing: border-box;
    cursor: pointer;
`;

const ErrorMessage = styled.p`
    position: absolute;
    bottom: 0.125rem;
    left: 0.25rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.err};
`;

export default Input;
