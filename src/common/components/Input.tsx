import { forwardRef } from 'react';

import styled from '@emotion/styled';

interface InputProps {
    label: string;
    placeholder?: string;
    type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, placeholder, type = 'text' }, ref) => {
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <InputBox autoComplete="off" placeholder={placeholder} type={type} ref={ref} />
        </InputWrapper>
    );
});

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Label = styled.label`
    padding-left: 0.25rem;
    ${({ theme }) => ({ ...theme.typography.t7 })};
`;

const InputBox = styled.input`
    margin: 0.25rem 0 1rem 0;
    padding: 0.625rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 0.5rem;
    box-sizing: border-box;
    cursor: pointer;
`;

export default Input;
