import axios, { AxiosError, AxiosResponse } from 'axios';

const baseURL = '';

const axiosInstance = axios.create({
    baseURL,
});

const apiClient = {
    async get<T>(url: string, params?: unknown): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axiosInstance.get<T>(url, { params });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw handleError(error);
            } else {
                throw new Error('알 수 없는 에러가 발생했습니다.');
            }
        }
    },
    async post<T>(url: string, data?: unknown): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axiosInstance.post<T>(url, data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw handleError(error);
            } else {
                throw new Error('알 수 없는 에러가 발생했습니다.');
            }
        }
    },
    async delete<T>(url: string): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axiosInstance.delete<T>(url);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw handleError(error);
            } else {
                throw new Error('알 수 없는 에러가 발생했습니다.');
            }
        }
    },
};

const handleError = (error: AxiosError): Error => {
    if (error.response) {
        console.error('잘못된 응답이 왔습니다.');
    } else if (error.request) {
        console.error('요청은 완료했으나, 서버로부터 응답을 받지 못했습니다.');
    } else {
        console.error('서버로부터 응답이 없습니다.');
    }
    return error;
};

export default apiClient;
