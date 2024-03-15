import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import Icon from '@common/components/Icon.tsx';

interface BottomTabProps {
    showBottomTab?: boolean;
}

const BottomTab = ({ showBottomTab = false }: BottomTabProps) => {
    const navigate = useNavigate();
    const onMovePage = (path: string) => {
        navigate(path);
    };
    // TODO: 유저/파트너 타입 추가
    const userType = 'user';

    return (
        <>
            {showBottomTab && (
                <BottomContainer>
                    <BottomButton onClick={() => onMovePage('/main')}>
                        <Icon>home</Icon>
                    </BottomButton>
                    <BottomButton onClick={() => onMovePage('/search')}>
                        <Icon>search</Icon>
                    </BottomButton>
                    <BottomButton onClick={() => onMovePage('/list')}>
                        <Icon>list</Icon>
                    </BottomButton>
                    <BottomButton onClick={() => onMovePage(`/${userType}/my`)}>
                        <Icon>person</Icon>
                    </BottomButton>
                </BottomContainer>
            )}
        </>
    );
};

const BottomContainer = styled.ul`
    position: fixed;
    bottom: 0;
    left: 50%;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    min-width: var(--min-width);
    max-width: var(--max-width);
    transform: translateX(-50%);
`;

const BottomButton = styled.li`
    position: relative;
    overflow: hidden;
    flex: 1 1 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgb(252, 252, 252);
`;

export default BottomTab;
