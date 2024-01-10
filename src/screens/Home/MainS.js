import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@rneui/themed';
import ThemeBtn from './ThemeBtn';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MainS = () => {
    const { theme } = useTheme();
  return (
    <View style={{flex: 1,marginTop: 90,backgroundColor: theme.colors.background}}>
        <MaterialCommunityIcons name="home" color={theme.colors.textColor} size={30} />
        <ThemeBtn/>
    </View>
  )
}

export default MainS

const styles = StyleSheet.create({})