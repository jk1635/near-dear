import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import FormWrapper from '@common/components/FormWrapper.tsx';
import Input from '@common/components/Input.tsx';
import SelectOption from '@common/components/Select.tsx';
import { initialCardRegisterForm } from '@common/constants';
// import { useCardRegister } from '@common/hooks/usePayment.ts';
import { CardRegisterForm, Option } from '@common/types/payments.ts';
import { cardValidationSchema } from '@common/utils/validation.ts';

const cardOptions: Array<Option> = [
    { value: 'personal', label: '개인 카드' },
    { value: 'corporate', label: '법인 카드' },
];

const PaymentCardPage = () => {
    const navigate = useNavigate();

    // TODO: api 추가 후 주석 해제
    // const cardMutation = useCardRegister();

    const cardMethods = useForm<CardRegisterForm>({
        defaultValues: initialCardRegisterForm,
        mode: 'onChange',
        resolver: yupResolver(cardValidationSchema),
    });

    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = cardMethods;

    const onSubmit: SubmitHandler<CardRegisterForm> = data => {
        // TODO: api 추가 후 콘솔로그 삭제
        console.log(data);
        navigate('/payment', { replace: true });
        // cardMutation.mutate(data);
    };

    return (
        <Container>
            <FormWrapper formHooks={cardMethods} onSubmit={onSubmit}>
                <>
                    <Controller
                        name="cardType"
                        control={control}
                        render={({ field }) => (
                            <SelectOption
                                label="카드 유형"
                                options={cardOptions}
                                value={cardOptions.find(option => option.value === field.value) || null}
                                onChange={value => field.onChange(value?.value)}
                            />
                        )}
                    />
                    <Input
                        label="카드 번호"
                        type="text"
                        error={errors.cardNumber?.message}
                        {...register('cardNumber')}
                    />
                    <ValidWrapper>
                        <Input
                            label="유효기간 (월/년)"
                            type="text"
                            error={errors.validDate?.message}
                            {...register('validDate')}
                        />
                        <Input
                            label="비밀번호"
                            type="password"
                            error={errors.cardPassword?.message}
                            {...register('cardPassword')}
                        />
                    </ValidWrapper>
                    <Input
                        label="생년월일 6자리"
                        type="text"
                        error={errors.birthDate?.message}
                        {...register('birthDate')}
                    />
                </>
            </FormWrapper>

            <FixedBottom>
                <Button onClick={handleSubmit(onSubmit)}>등록하기</Button>
            </FixedBottom>
        </Container>
    );
};

const ValidWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    & > div {
        flex: 1;
        min-width: 0;
    }
`;

export default PaymentCardPage;
