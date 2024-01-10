import React from 'react';
import { StyleSheet, View ,Modal,Image,ActivityIndicator} from 'react-native';

const LoadingSpinner = ({isLoading}) => {
  return (
    <Modal
        transparent={true}
        animationType={'none'}
        visible={isLoading}
        style={{ zIndex: 1100 }}
        onRequestClose={() => { }}>
        <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator size={'large'} color='white'/>

                {/* If you want to image set source here */}
                {/* <Image
                    source={require('../assets/images/Logopng.png')}
                    style={{ height: 100, width: 100 }}
                    resizeMode="contain"
                    resizeMethod="resize"
                /> */}
                
            </View>
        </View>
    </Modal>
  )
}

export default LoadingSpinner;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#rgba(0, 0, 0, 0.5)',
        zIndex: 1000
      },
      activityIndicatorWrapper: {
        backgroundColor: '#rgba(0, 0, 0, 0.5)',
        height: '100%',
        width: '100%',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      }
})