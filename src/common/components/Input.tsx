import { ChangeEvent, HTMLAttributes } from 'react';

import styled from '@emotion/styled';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const Input = ({ label, placeholder, onChange, type }: InputProps) => {
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <InputBox placeholder={placeholder} type={type} onChange={onChange} />
        </InputWrapper>
    );
};

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
