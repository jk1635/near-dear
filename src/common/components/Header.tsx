import { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

interface HeaderProps {
    title?: string;
    showBackButton?: boolean;
    rightItems?: ReactElement;
}

const Header = ({ title, rightItems, showBackButton = false }: HeaderProps) => {
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    return (
        <HeaderContainer>
            {showBackButton && (
                <span className="material-symbols-outlined" onClick={handleBack}>
                    arrow_back_ios
                </span>
            )}
            <div>
                <h1>{title}</h1>
            </div>
            <div>{rightItems}</div>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 999;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    min-width: var(--min-width);
    max-width: var(--max-width);
    padding: 0 1.5rem;
    background-color: rgb(252, 252, 252);
    transform: translateX(-50%);
`;

export default Header;
