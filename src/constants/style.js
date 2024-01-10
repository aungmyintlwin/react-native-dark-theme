import {scaleWidth} from "../utils/responsive";

export const colors = {
    background: "#1E1F28",
    primary: "#EF3651",
    white: "#fff",
    black: "#000",
    gray: "#ABB4BD",
    dark: "#2A2C36",
    tabBarActiveTintColor: '#EF3651',
    tabBarInactiveTintColor: '#888',
    tabBarBgColor: '#fff',
}

export const sizes = {
    radius: 5,
}

export const fonts = {
    h1: {fontSize: scaleWidth(30), fontWeight: 'bold', color: colors.white},
    h2: {fontSize: scaleWidth(20), fontWeight: 'bold', color: colors.white},
    h3: {fontSize: scaleWidth(18), fontWeight: 'bold', color: colors.white},
    body1: {fontSize: scaleWidth(11), color: colors.gray},
    body2: {fontSize: scaleWidth(12), color: colors.gray},
    body3: {fontSize: scaleWidth(14), fontWeight: 'bold', color: colors.white},
};
