import { Children, ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import styled from '@emotion/styled';

import { GlobalPortal } from '@/GlobalPortal';

import Button from './Button';

type FixedBottomProps = ComponentPropsWithoutRef<typeof Button> & {
    children: ReactNode;
};

const FixedBottom = forwardRef<HTMLDivElement, FixedBottomProps>(({ children }, ref) => {
    return (
        <GlobalPortal.Consumer>
            <BottomContainer>
                {Children.map(children, (child, index) => (
                    <ButtonWrapper key={index} ref={ref}>
                        {child}
                    </ButtonWrapper>
                ))}
            </BottomContainer>
        </GlobalPortal.Consumer>
    );
});

const BottomContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    z-index: 500;
    width: 100%;
    min-width: var(--min-width);
    max-width: var(--max-width);
    padding: 1rem 1.5rem;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 16px);
    transform: translateX(-50%);
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export default FixedBottom;
