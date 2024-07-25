import { DefaultTheme } from '@react-navigation/native';

import { COLORS } from '~/constants';

const light = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        /* Background */
        container: COLORS.white100,
        pageBackground1: COLORS.neutralGray20,
        pageBackground2: COLORS.white100,
        pageBackground3: COLORS.neutralGray10,
        uiBackground: COLORS.white100,
        uiBackgroundDisabled: COLORS.neutralGray30,
        uiBackgroundHighlighted: COLORS.skyBlue10,
        uiBackgroundPressed: COLORS.neutralGray20,
        uiBackgroundSelected: COLORS.neutralGray10,
        uiBackgroundTransparent: COLORS.white0,
        /* Text */
        selectionLabel: COLORS.blue70,
        text1: COLORS.neutralGray100,
        text2: COLORS.neutralGray60,
        text3: COLORS.neutralGray40,
        text4: COLORS.white100,
        /* Icon */
        icon1: COLORS.neutralGray100,
        icon2: COLORS.neutralGray60,
        icon3: COLORS.neutralGray40,
        icon4: COLORS.white100,
        /* Interactive */
        danger: COLORS.red60,
        dangerPressed: COLORS.red70,
        link1: COLORS.blue60,
        link2: COLORS.blue50,
        linkPressed: COLORS.blue70,
        selected: COLORS.blue60,
        /* Support */
        supportError: COLORS.red60,
        supportSuccess: COLORS.green60,
        supportWarning: COLORS.yellow60,
        supportInformative: COLORS.blue70,
        /* Border & divider */
        divider1: COLORS.neutralGray20,
        divider2: COLORS.neutralGray30,
        border1: COLORS.neutralGray30,
        border2: COLORS.neutralGray40,
        borderSelected: COLORS.blue60,
        borderDanger: COLORS.red60,
    },
};

export default light;
