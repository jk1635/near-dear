import { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

import Button from '@common/components/Button.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import FormWrapper from '@common/components/FormWrapper.tsx';
import Input from '@common/components/Input.tsx';
import { initialSignUpForm } from '@common/constants';
import { useSignUp } from '@common/hooks/useUser.ts';
import { SignUpForm } from '@common/types/user.ts';
import { signUpSchema } from '@common/utils/validation.ts';

const UserForm = () => {
    const userMutation = useSignUp();

    const auth = useForm<SignUpForm>({
        defaultValues: initialSignUpForm,
        resolver: yupResolver(signUpSchema),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = auth;

    const phoneNumber = useWatch({
        control: auth.control,
        name: 'phoneNumber',
    });

    const onSubmit: SubmitHandler<SignUpForm> = data => {
        userMutation.mutate(data);
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
            <FormWrapper formHooks={auth} onSubmit={onSubmit}>
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
                    <Input label="닉네임" type="text" error={errors.nickname?.message} {...register('nickname')} />
                    <Input
                        label="휴대폰 번호"
                        type="tel"
                        error={errors.phoneNumber?.message}
                        {...register('phoneNumber')}
                    />
                </>
            </FormWrapper>
            <FixedBottom>
                <Button type="submit" onClick={handleSubmit(onSubmit)}>
                    가입하기
                </Button>
            </FixedBottom>
        </>
    );
};

export default UserForm;
