import { ReactElement } from 'react';

import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

interface FormWrapperProps<T extends FieldValues> {
    formHooks: UseFormReturn<T>;
    onSubmit?: SubmitHandler<T>;
    children: ReactElement;
}

const FormWrapper = <T extends FieldValues>({ formHooks, onSubmit, children }: FormWrapperProps<T>) => {
    return (
        <FormProvider {...formHooks}>
            <form onSubmit={onSubmit && formHooks.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
};

export default FormWrapper;
