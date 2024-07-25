import { ColorValue, TextStyle } from 'react-native';

export interface IColor {
    /** Neutral Gray */
    neutralGray10: ColorValue;
    neutralGray20: ColorValue;
    neutralGray30: ColorValue;
    neutralGray40: ColorValue;
    neutralGray50: ColorValue;
    neutralGray60: ColorValue;
    neutralGray70: ColorValue;
    neutralGray80: ColorValue;
    neutralGray90: ColorValue;
    neutralGray100: ColorValue;
    /** Blue */
    blue10: ColorValue;
    blue20: ColorValue;
    blue30: ColorValue;
    blue40: ColorValue;
    blue50: ColorValue;
    blue60: ColorValue;
    blue70: ColorValue;
    blue80: ColorValue;
    blue90: ColorValue;
    blue100: ColorValue;
    /** Red */
    red10: ColorValue;
    red20: ColorValue;
    red30: ColorValue;
    red40: ColorValue;
    red50: ColorValue;
    red60: ColorValue;
    red70: ColorValue;
    red80: ColorValue;
    red90: ColorValue;
    red100: ColorValue;
    /** Yellow */
    yellow10: ColorValue;
    yellow20: ColorValue;
    yellow30: ColorValue;
    yellow40: ColorValue;
    yellow50: ColorValue;
    yellow60: ColorValue;
    yellow70: ColorValue;
    yellow80: ColorValue;
    yellow90: ColorValue;
    yellow100: ColorValue;
    /** Green */
    green10: ColorValue;
    green20: ColorValue;
    green30: ColorValue;
    green40: ColorValue;
    green50: ColorValue;
    green60: ColorValue;
    green70: ColorValue;
    green80: ColorValue;
    green90: ColorValue;
    green100: ColorValue;
    /** Orange */
    orange10: ColorValue;
    orange20: ColorValue;
    orange30: ColorValue;
    orange40: ColorValue;
    orange50: ColorValue;
    orange60: ColorValue;
    orange70: ColorValue;
    orange80: ColorValue;
    orange90: ColorValue;
    orange100: ColorValue;
    /** Steel Blue */
    steelBlue10: ColorValue;
    steelBlue20: ColorValue;
    steelBlue30: ColorValue;
    steelBlue40: ColorValue;
    steelBlue50: ColorValue;
    steelBlue60: ColorValue;
    steelBlue70: ColorValue;
    steelBlue80: ColorValue;
    steelBlue90: ColorValue;
    steelBlue100: ColorValue;
    /** Teal */
    teal10: ColorValue;
    teal20: ColorValue;
    teal30: ColorValue;
    teal40: ColorValue;
    teal50: ColorValue;
    teal60: ColorValue;
    teal70: ColorValue;
    teal80: ColorValue;
    teal90: ColorValue;
    teal100: ColorValue;
    /* Purple */
    purple10: ColorValue;
    purple20: ColorValue;
    purple30: ColorValue;
    purple40: ColorValue;
    purple50: ColorValue;
    purple60: ColorValue;
    purple70: ColorValue;
    purple80: ColorValue;
    purple90: ColorValue;
    purple100: ColorValue;
    /** Pink */
    pink10: ColorValue;
    pink20: ColorValue;
    pink30: ColorValue;
    pink40: ColorValue;
    pink50: ColorValue;
    pink60: ColorValue;
    pink70: ColorValue;
    pink80: ColorValue;
    pink90: ColorValue;
    pink100: ColorValue;
    /** Sky Blue */
    skyBlue10: ColorValue;
    skyBlue20: ColorValue;
    skyBlue30: ColorValue;
    skyBlue40: ColorValue;
    skyBlue50: ColorValue;
    skyBlue60: ColorValue;
    skyBlue70: ColorValue;
    skyBlue80: ColorValue;
    skyBlue90: ColorValue;
    skyBlue100: ColorValue;
    /** Black */
    black0: ColorValue;
    black5: ColorValue;
    black10: ColorValue;
    black20: ColorValue;
    black30: ColorValue;
    black40: ColorValue;
    black50: ColorValue;
    black60: ColorValue;
    black70: ColorValue;
    black80: ColorValue;
    black90: ColorValue;
    black100: ColorValue;
    /** White */
    white0: ColorValue;
    white5: ColorValue;
    white10: ColorValue;
    white20: ColorValue;
    white30: ColorValue;
    white40: ColorValue;
    white50: ColorValue;
    white60: ColorValue;
    white70: ColorValue;
    white80: ColorValue;
    white90: ColorValue;
    white100: ColorValue;
}

export interface IFont {
    avatar: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    headingXLarge: {
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textLargeM: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textLarge: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textNormal: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textSmall: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textSmallM: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textXLarge: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textXLargeM: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textXSmall: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textXXSmall: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textXSmallM: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textXXXSmall: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    textXXXSmallM: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    titleLarge: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    titleNormal: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
    titleSmall: {
        fontFamily: TextStyle['fontFamily'];
        fontSize: TextStyle['fontSize'];
        lineHeight: TextStyle['lineHeight'];
    };
}

export interface ILineHeight {
    heading: number;
    /** Title */
    titleLarge: number;
    titleNormal: number;
    titleSmall: number;
    /** Text */
    textXLarge: number;
    textLarge: number;
    textNormal: number;
    textSmall: number;
    textXSmall: number;
    textXXSmall: number;
    textXXXSmall: number;
    /** Avatar */
    avatar: number;
}

export interface ISize {
    /** Global size */
    radius: number;
    padding: number;
    gap: number;
    /** Font size */
    heading: number;
    /** Font title */
    titleLarge: number;
    titleNormal: number;
    titleSmall: number;
    /** Text */
    textXLarge: number;
    textLarge: number;
    textNormal: number;
    textSmall: number;
    textXSmall: number;
    textXXSmall: number;
    textXXXSmall: number;
    /** Avatar */
    avatar: number;
}
