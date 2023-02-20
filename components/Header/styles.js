import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    blurContainer: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    text: {
        fontWeight: '800',
    },
});
export default styles;
