import React, { FC, memo } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme } from '~/types';
import Block from '../Block';
import CalendarView from './CalendarView';
import { dp } from '~/utils';

interface CalendarProps {
    date?: Date;
    onChange?: (value: Date) => void;
}

const Calendar: FC<CalendarProps> = ({ date = new Date(), onChange }) => {
    const { colors } = useTheme() as CustomTheme;

    return (
        <Block color={colors.pageBackground2} gap={0} pb={dp(32)} px={dp(16)} pt={dp(24)} radius={dp(8)}>
            {/* Calendar */}
            <CalendarView date={date} onChange={onChange} />
        </Block>
    );
};

export default memo(Calendar);
