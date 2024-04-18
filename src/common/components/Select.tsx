import Select, { StylesConfig } from 'react-select';

import styled from '@emotion/styled';

import theme from '@common/styles/theme.ts';
import { Option } from '@common/types/payments.ts';

interface SelectOptionProps {
    label: string;
    options: Array<Option>;
    value: Option | null;
    onChange: (selectedOption: Option | null) => void;
    styles?: StylesConfig<Option, false>;
}

const SelectOption = ({ label, options, value, onChange }: SelectOptionProps) => {
    return (
        <SelectWrapper>
            <Label>{label}</Label>
            <Select
                isSearchable={false}
                options={options}
                value={value}
                onChange={onChange}
                styles={SelectStyle}
                menuPortalTarget={document.body}
            />
        </SelectWrapper>
    );
};

const SelectWrapper = styled.div`
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

const SelectStyle: StylesConfig<Option, false> = {
    control: baseStyles => ({
        ...baseStyles,
        margin: '0.25rem 0 1rem 0',
        minHeight: '2.531rem',
        border: `1px solid ${theme.colors.gray}`,
        borderRadius: '0.5rem',
        boxShadow: 'none',
        cursor: 'pointer',
        '&:hover': {
            border: `1px solid ${theme.colors.gray}`,
        },
    }),
    option: (baseStyles, { isSelected, isFocused }) => ({
        ...baseStyles,
        minHeight: '3rem',
        cursor: 'pointer',
        backgroundColor: `${theme.colors.white}`,
        color: `${theme.colors.black}`,
        '&:active': {
            backgroundColor: !isFocused && !isSelected ? 'transparent' : theme.colors.light_gray,
        },
        '&:hover': {
            backgroundColor: theme.colors.light_gray,
        },
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    menuPortal: baseStyles => ({
        ...baseStyles,
        zIndex: 9999,
    }),
};

export default SelectOption;
