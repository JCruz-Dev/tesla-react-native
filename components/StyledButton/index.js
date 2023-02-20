import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
const StyledButton = ({ type, content, onPress }) => {
    const ButtonBackgroundColor = {
        primary: {
            button: '#171A20CC',
            text: '#FFFFFF',
        },
        secondary: {
            button: 'white',
            text: '#171A20',
        },
    };
    return (
        <View style={styles.container}>
            <Pressable
                style={[
                    styles.button,
                    { backgroundColor: ButtonBackgroundColor[type].button },
                ]}
                onPress={() => onPress()}
            >
                <Text
                    style={[
                        styles.text,
                        { color: ButtonBackgroundColor[type].text },
                    ]}
                >
                    {content}
                </Text>
            </Pressable>
        </View>
    );
};
export default StyledButton;
