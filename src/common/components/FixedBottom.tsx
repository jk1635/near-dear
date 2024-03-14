import { ComponentPropsWithoutRef, forwardRef } from 'react';

import styled from '@emotion/styled';

import { GlobalPortal } from '@/GlobalPortal';

import Button from './Button';

type FixedBottomProps = ComponentPropsWithoutRef<typeof Button>;

const FixedBottom = forwardRef<HTMLButtonElement, FixedBottomProps>(({ children, ...rest }, ref) => {
    return (
        <GlobalPortal.Consumer>
            <BottomContainer>
                <Button {...rest} ref={ref}>
                    {children}
                </Button>
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

export default FixedBottom;
