import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

import Button from '@common/components/Button.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import FormWrapper from '@common/components/FormWrapper.tsx';
import Input from '@common/components/Input.tsx';
import { initialSignUpForm } from '@common/constants';
import useFormatPhoneNumber from '@common/hooks/useFormatPhoneNumber.ts';
import { useSignUp } from '@common/hooks/useUser.ts';
import { SignUpForm } from '@common/types/user.ts';
import { userSchema } from '@common/utils/validation.ts';

const UserForm = () => {
    const userMutation = useSignUp();

    const auth = useForm<SignUpForm>({
        defaultValues: initialSignUpForm,
        mode: 'onChange',
        resolver: yupResolver(userSchema),
    });

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = auth;

    const onSubmit: SubmitHandler<SignUpForm> = data => {
        userMutation.mutate(data);
    };

    const phoneNumber = useWatch({
        control: control,
        name: 'phoneNumber',
    });

    useFormatPhoneNumber({
        phoneNumber: phoneNumber,
        setValue: setValue,
        fieldName: 'phoneNumber',
    });

    return (
        <>
            <FormWrapper formHooks={auth} onSubmit={onSubmit}>
                <>
                    <Input label="이메일" type="email" error={errors.email?.message} {...register('email')} />
                    <Input
                        label="비밀번호"
                        type="password"
                        error={errors.password?.message}
                        {...register('password')}
                    />
                    <Input
                        label="비밀번호 확인"
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
                <Button onClick={handleSubmit(onSubmit)}>가입하기</Button>
            </FixedBottom>
        </>
    );
};

export default UserForm;
