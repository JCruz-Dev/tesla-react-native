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
        paddingTop: 8,
        paddingBottom: 8,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        overflow: 'hidden',
    },
    text: {
        fontWeight: '600',
    },
});
export default styles;
