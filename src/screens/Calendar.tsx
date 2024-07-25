import React, { FC, useCallback, useState } from 'react';

import { MainStackScreenProps } from '~/types';
import { Calendar as CalendarComponent, Container } from '~/components';

const Calendar: FC<MainStackScreenProps<'Calendar'>> = ({ navigation }) => {
    const [date, setDate] = useState<Date>(new Date());

    const onChange = useCallback((value: Date) => {
        setDate(value);
    }, []);

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container onBack={onBack} title={'Calendar'}>
            {/* Calendar */}
            <CalendarComponent date={date} onChange={onChange} />
        </Container>
    );
};

export default Calendar;
