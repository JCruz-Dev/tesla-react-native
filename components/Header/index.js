import { BlurView } from 'expo-blur';
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <BlurView intensity={60} style={styles.blurContainer}>
                <Text style={styles.text}>Menu</Text>
            </BlurView>
        </View>
    );
};
export default Header;
