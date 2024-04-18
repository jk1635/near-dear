import Text from '@common/components/Text.tsx';

import BasicContainer from './Container.tsx';

const Loading = () => {
    return (
        <BasicContainer isCentered>
            <Text variant="title2" isCentered>
                Loading
            </Text>
        </BasicContainer>
    );
};

export default Loading;
