import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
    decorativeLine: {
        width: 40,
        height: 2,
        backgroundColor: '#14B8A6',
        marginHorizontal: 10,
    },
    titleK: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#E94E4E',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom: 20,
    },
    descriptionText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#333',
        marginBottom: 15,
        lineHeight: 20,
    },
    italicText: {
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'italic',
        color: '#333',
        paddingHorizontal: 10,
        lineHeight: 22,
        marginBottom: 50,
    },
    valuesList: {
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginBottom: 30,
    },
    valueItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    bullet: {
        width: 5,
        height: 5,
        backgroundColor: '#000',
        borderRadius: 3,
        marginRight: 10,
    },
    valueText: {
        fontSize: 15,
        color: '#333',
        fontWeight: '500',
    },
});