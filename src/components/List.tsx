import React, { FC, memo } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme } from '~/types';
import Block from './Block';
import Text from './Text';
import { dp } from '~/utils';

type ListProps = {
    array?: Array<string>;
};

const List: FC<ListProps> = ({ array = [] }) => {
    const { colors } = useTheme() as CustomTheme;

    return (
        <Block>
            {array.map((item, index) => (
                <Block key={`List-${index}`} row>
                    <Block align={'center'} w={dp(20)}>
                        <Block color={colors.text2} h={dp(3)} rounded top={dp(7)} w={dp(3)} />
                    </Block>
                    <Text color={colors.text2} flex={1} textXSmall>
                        {item}
                    </Text>
                </Block>
            ))}
        </Block>
    );
};

export default memo(List);
