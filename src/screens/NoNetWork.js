import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
// import HeaderLogo from './Home/HeaderLogo/HeaderLogo';
// import { Text, Button, ActivityIndicator} from 'react-native-paper';
// import RNRestart from 'react-native-restart';
// import SplashScreen from 'react-native-splash-screen';


const NoNetWork = () => {
    React.useEffect(() => {
        SplashScreen.hide(); //hides the splash screen on app load.
    }, []);

    const onReload = () => {
        // RNRestart.restart();
    }
    return (
        <SafeAreaView style={{flex: 1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,backgroundColor: '#f4f4f4'}}>
            <View>
                {/* <HeaderLogo />
                <View style={{paddingVertical: 40,paddingHorizontal: 20}}>
                    <ActivityIndicator animating={true} size={'large'} color='gold'/>
                    <Text variant="titleLarge" style={{textAlign: 'center',paddingVertical: 50}}>No Internet Connection! Please open internet and reload app</Text>
                    <Button buttonColor='skyblue' icon="reload" mode="contained" onPress={onReload}>
                        Reload
                    </Button>

                </View> */}
            </View>
        </SafeAreaView>
    )
}

export default NoNetWork

const styles = StyleSheet.create({})