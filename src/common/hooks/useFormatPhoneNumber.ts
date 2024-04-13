import { useEffect } from 'react';

import { UseFormSetValue } from 'react-hook-form';

import { areaCode } from '@common/constants';
import { PartnerSignUpForm } from '@common/types/user.ts';

interface UseFormatPhoneNumberProps {
    phoneNumber: string;
    setValue: UseFormSetValue<PartnerSignUpForm>;
    fieldName: 'phoneNumber' | 'businessContactNumber';
}

const useFormatPhoneNumber = ({ phoneNumber, setValue, fieldName }: UseFormatPhoneNumberProps) => {
    useEffect(() => {
        const value = phoneNumber.replace(/\D/g, '').slice(0, 11);
        let formattedValue = '';

        // 휴대폰 번호 (010)
        if (value.startsWith('010')) {
            if (value.length === 11) {
                // 010-1234-5678
                formattedValue = [value.slice(0, 3), value.slice(3, 7), value.slice(7)].join('-');
            } else {
                formattedValue = value;
            }
        }

        // 서울 지역번호 (02)
        else if (value.startsWith('02')) {
            if (value.length === 9) {
                // 02-123-4567
                formattedValue = [value.slice(0, 2), value.slice(2, 5), value.slice(5)].join('-');
            } else if (value.length === 10) {
                // 02-1234-5678
                formattedValue = [value.slice(0, 2), value.slice(2, 6), value.slice(6)].join('-');
            } else {
                formattedValue = value;
            }
        }

        // 서울 이외의 지역번호 (031~065)
        else if (areaCode.includes(value.slice(0, 3))) {
            if (value.length === 10) {
                // 031-123-4567
                formattedValue = [value.slice(0, 3), value.slice(3, 6), value.slice(6)].join('-');
            } else if (value.length === 11) {
                // 031-1234-5678
                formattedValue = [value.slice(0, 3), value.slice(3, 7), value.slice(7)].join('-');
            } else {
                formattedValue = value;
            }
        } else {
            formattedValue = value;
        }

        setValue(fieldName, formattedValue);
    }, [phoneNumber, setValue, fieldName]);
};

export default useFormatPhoneNumber;
