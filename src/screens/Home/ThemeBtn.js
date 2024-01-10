import { View, Text } from 'react-native'
import React from 'react'
import { Button, useThemeMode } from '@rneui/themed';

const ThemeBtn = () => {
    const { mode, setMode } = useThemeMode();
  return (
    <Button onPress={() => {
        if(mode == 'dark') {
            setMode('light')
        }else{
            setMode('dark')
        }
    }}  title={mode.toUpperCase()}/>
  )
}

export default ThemeBtn