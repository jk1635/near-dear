import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import FormWrapper from '@common/components/FormWrapper.tsx';
import Input from '@common/components/Input.tsx';
import { initialLoginForm } from '@common/constants';
import { useLogin } from '@common/hooks/useUser.ts';
import { LoginForm } from '@common/types/user.ts';

const LoginPage = () => {
    const loginMutation = useLogin();

    const loginMethods = useForm<LoginForm>({ defaultValues: initialLoginForm });

    const { register, handleSubmit } = loginMethods;

    const onSubmit: SubmitHandler<LoginForm> = data => {
        loginMutation.mutate(data);
    };

    return (
        <Container>
            <FormWrapper formHooks={loginMethods} onSubmit={onSubmit}>
                <>
                    <Input label="이메일" type="email" {...register('email')} />
                    <Input label="패스워드" type="password" {...register('password')} />
                </>
            </FormWrapper>
            <FixedBottom>
                <Button onClick={handleSubmit(onSubmit)}>로그인</Button>
            </FixedBottom>
        </Container>
    );
};

export default LoginPage;
