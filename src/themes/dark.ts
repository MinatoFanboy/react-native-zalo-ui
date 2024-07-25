import { DarkTheme } from '@react-navigation/native';

import { COLORS } from '~/constants';

const dark = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        container: COLORS.neutralGray90,
        pageBackground1: COLORS.black100,
        pageBackground2: COLORS.neutralGray100,
        pageBackground3: COLORS.neutralGray90,
        uiBackground: COLORS.neutralGray100,
        uiBackgroundDisabled: COLORS.neutralGray80,
        uiBackgroundHighlighted: COLORS.skyBlue100,
        uiBackgroundPressed: COLORS.neutralGray80,
        uiBackgroundSelected: COLORS.neutralGray90,
        uiBackgroundTransparent: COLORS.black0,
        /* Text */
        selectionLabel: COLORS.blue40,
        text1: COLORS.neutralGray10,
        text2: COLORS.neutralGray50,
        text3: COLORS.neutralGray70,
        text4: COLORS.white100,
        /* Icon */
        icon1: COLORS.neutralGray10,
        icon2: COLORS.neutralGray50,
        icon3: COLORS.neutralGray70,
        icon4: COLORS.white100,
        /* Interactive */
        danger: COLORS.red60,
        dangerPressed: COLORS.red50,
        link1: COLORS.blue60,
        link2: COLORS.blue50,
        linkPressed: COLORS.blue70,
        selected: COLORS.blue60,
        /* Support */
        supportError: COLORS.red60,
        supportSuccess: COLORS.green60,
        supportWarning: COLORS.yellow60,
        supportInformative: COLORS.blue60,
        /* Border & divider */
        divider1: COLORS.neutralGray80,
        divider2: COLORS.neutralGray70,
        border1: COLORS.neutralGray70,
        border2: COLORS.neutralGray60,
        borderSelected: COLORS.blue60,
        borderDanger: COLORS.red60,
    },
};

export default dark;
