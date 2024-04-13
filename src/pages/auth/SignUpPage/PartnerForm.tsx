import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

import Button from '@common/components/Button.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import FormWrapper from '@common/components/FormWrapper.tsx';
import Input from '@common/components/Input.tsx';
import { initialPartnerSignUpForm } from '@common/constants';
import useFormatPhoneNumber from '@common/hooks/useFormatPhoneNumber.ts';
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

    const onSubmit: SubmitHandler<PartnerSignUpForm> = data => {
        partnerMutation.mutate(data);
    };

    const phoneNumber = useWatch({
        control: partnerAuth.control,
        name: 'phoneNumber',
    });

    const businessContactNumber = useWatch({
        control: partnerAuth.control,
        name: 'businessContactNumber',
    });

    useFormatPhoneNumber({
        phoneNumber: phoneNumber,
        setValue: setValue,
        fieldName: 'phoneNumber',
    });

    useFormatPhoneNumber({
        phoneNumber: businessContactNumber,
        setValue: setValue,
        fieldName: 'businessContactNumber',
    });

    return (
        <>
            <FormWrapper formHooks={partnerAuth} onSubmit={onSubmit}>
                <>
                    <Input label="이메일" type="email" error={errors.email?.message} {...register('email')} />
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
                    <Input
                        label="상점 이름"
                        type="text"
                        error={errors.merchantName?.message}
                        {...register('merchantName')}
                    />
                    <Input
                        label="상점 주소"
                        type="text"
                        error={errors.merchantAddress?.message}
                        {...register('merchantAddress')}
                    />
                    <Input
                        label="사업자 등록 번호"
                        type="text"
                        error={errors.businessNumber?.message}
                        {...register('businessNumber')}
                    />
                    <Input
                        label="상점 연락처"
                        type="tel"
                        error={errors.businessContactNumber?.message}
                        {...register('businessContactNumber')}
                    />
                </>
            </FormWrapper>
            <FixedBottom>
                <Button onClick={handleSubmit(onSubmit)}>가입하기</Button>
            </FixedBottom>
        </>
    );
};

export default PartnerForm;
