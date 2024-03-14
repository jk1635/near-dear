import FixedBottom from '@common/components/FixedBottom.tsx';

const JoinPage = () => {
    const handleUserJoin = () => {};
    return (
        <div>
            <div>Join</div>
            <FixedBottom onClick={handleUserJoin}>가입완료</FixedBottom>
        </div>
    );
};

export default JoinPage;
