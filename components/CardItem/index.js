import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CardItem = ({ name, tagline, image, taglineCTA }) => {
    return (
        <View style={styles.carContainer}>
            <View>
                <Image source={require('../../assets/logo.png')} />
                <Image source={require('../../assets/images/menu.png')} />
            </View>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}{' '}
                    <Text style={styles.taglineCTA}>{taglineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton
                    type={'primary'}
                    content='Custom Order'
                    onPress={() => {
                        console.warn('Custom Order was Pressed');
                    }}
                />
                <StyledButton
                    type={'secondary'}
                    content='Existing inventory'
                    onPress={() => {
                        console.warn('Existing inventory was Pressed');
                    }}
                />
            </View>
        </View>
    );
};
export default CardItem;
