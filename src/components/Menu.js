import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function BottomMenu({ modalAction, modalState }) {

    function showModal() {
        modalAction(!modalState)
    }

    return (
        <ImageBackground
            source={require('./images/bottomMenuBackground.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <TouchableOpacity style={styles.tab}>
                    <Feather name="bar-chart-2" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.centerTab} onPress={showModal}>
                    <Feather name="plus" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Entypo name="share" size={32} color="black" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 0.35,
        resizeMode: 'contain',
    },
    container: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        alignItems: 'center',
        marginTop: 40
    },
    centerTab: {
        marginBottom: 40,
        backgroundColor: '#FFF',
        borderRadius: 100,
    },
    tab: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});