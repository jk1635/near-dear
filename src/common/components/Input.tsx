// import colors from 'constants/colors';
//
// import { Children, HTMLAttributes, ReactElement, ReactNode, cloneElement, useId } from 'react';
//
// interface InputProps extends HTMLAttributes<HTMLDivElement> {
//     label?: ReactNode;
//     children: ReactElement;
//     bottomText?: string;
// }
//
// function Input({ label, children, bottomText, ...props }: InputProps) {
//     const child = Children.only(children);
//     const generatedId = useId();
//     const id = child.props.id ?? generatedId;
//     const isError: boolean = child.props.hasError ?? false;
//
//     return (
//         <div css={{ width: '100%' }} {...props}>
//             <label
//                 htmlFor={id}
//                 css={{
//                     display: 'inline-block',
//                     padding: '5px 0',
//                     fontSize: '15px',
//                     fontWeight: '500',
//                     lineHeight: 1.6,
//                     color: colors.grey700,
//                 }}
//             >
//                 {label}
//             </label>
//             {cloneElement(child, {
//                 id,
//                 ...child.props,
//             })}
//             {bottomText != null ? (
//                 <p
//                     css={{
//                         color: isError ? colors.red600 : colors.grey600,
//                         marginTop: '4px',
//                         display: 'inline-block',
//                         fontWeight: 400,
//                         fontSize: '15px',
//                     }}
//                 >
//                     {bottomText}
//                 </p>
//             ) : null}
//         </div>
//     );
// }
//
// export default Input;

import { HTMLAttributes } from 'react';

import styled from '@emotion/styled';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    placeholder?: string;
}

const Input = ({ label, placeholder }: InputProps) => {
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <InputBox placeholder={placeholder} />
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
