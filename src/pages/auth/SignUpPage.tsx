import { useParams } from 'react-router-dom';

import Container from '@common/components/Container.tsx';

import PartnerForm from '@pages/auth/components/PartnerForm.tsx';
import UserForm from '@pages/auth/components/UserForm.tsx';

const SignUpPage = () => {
    const { type } = useParams();

    return <Container>{type === 'user' ? <UserForm /> : <PartnerForm />}</Container>;
};

export default SignUpPage;
