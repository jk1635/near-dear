import { useMutation } from '@tanstack/react-query';

import { CardRegisterForm } from '@common/types/payments.ts';
import apiClient from '@common/utils/apiClient.ts';

// 카드 등록
const useCardRegister = () => {
    return useMutation({
        // TODO: api 임의로 작성
        mutationFn: (cardRegister: CardRegisterForm) => apiClient.post('/card', cardRegister),
        onSuccess: () => {
            console.log('카드 등록 성공');
        },
        onError: error => {
            console.error(error);
        },
    });
};

export { useCardRegister };
