import { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

import Button from '@common/components/Button.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import FormWrapper from '@common/components/FormWrapper.tsx';
import Input from '@common/components/Input.tsx';
import { initialPartnerSignUpForm } from '@common/constants';
import { usePartnerSignUp } from '@common/hooks/useUser.ts';
import { PartnerSignUpForm } from '@common/types/user.ts';
import { partnerSchema } from '@common/utils/validation.ts';

const PartnerForm = () => {
    const partnerMutation = usePartnerSignUp();

    const partnerAuth = useForm<PartnerSignUpForm>({
        defaultValues: initialPartnerSignUpForm,
        mode: 'onChange',
        resolver: yupResolver(partnerSchema),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = partnerAuth;

    const phoneNumber = useWatch({
        control: partnerAuth.control,
        name: 'phoneNumber',
    });

    const onSubmit: SubmitHandler<PartnerSignUpForm> = data => {
        partnerMutation.mutate(data);
    };

    useEffect(() => {
        const value = phoneNumber.replace(/\D/g, '').slice(0, 11);
        const formattedValue = [value.slice(0, 3), value.slice(3, 7), value.slice(7)]
            .filter(part => part !== '')
            .join('-');

        setValue('phoneNumber', formattedValue);
    }, [phoneNumber, setValue]);

    return (
        <>
            <FormWrapper formHooks={partnerAuth} onSubmit={onSubmit}>
                <>
                    <Input label="이메일" type="email" {...register('email')} error={errors.email?.message} />
                    <Input
                        label="패스워드"
                        type="password"
                        error={errors.password?.message}
                        {...register('password')}
                    />
                    <Input
                        label="패스워드 확인"
                        type="password"
                        error={errors.passwordConfirm?.message}
                        {...register('passwordConfirm')}
                    />
                    <Input
                        label="휴대폰 번호"
                        type="tel"
                        error={errors.phoneNumber?.message}
                        {...register('phoneNumber')}
                    />
                    <Input label="상점 이름" type="text" error={errors.merchantName?.message} />
                    <Input label="상점 주소" type="text" error={errors.merchantAddress?.message} />
                    <Input label="사업자 등록 번호" type="text" error={errors.businessNumber?.message} />
                    <Input label="상점 연락처" type="text" error={errors.businessContactNumber?.message} />
                </>
            </FormWrapper>
            <FixedBottom>
                <Button onClick={handleSubmit(onSubmit)}>가입하기</Button>
            </FixedBottom>
        </>
    );
};

export default PartnerForm;
