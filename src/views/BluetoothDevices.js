import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import useBLE from "../hooks/useBLE";
import ListItem from '../components/ListItem';

export default function BluetoothDevices({ navigation }) {
    const {
        requestPermissions,
        scanForPeripherals,
        allDevices,
        connectToDevice,
        connectedDevice,
        disconnectFromDevice,
    } = useBLE();

    const scanForDevices = async () => {
        const isPermissionsEnabled = await requestPermissions();
        if (isPermissionsEnabled) {
            scanForPeripherals();
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Dispositivos</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="arrow-back" size={32} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={scanForDevices}>
                        <Text style={styles.buttonText}>Scanear dispositivos</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={allDevices}
                    renderItem={({ item }) => <View style={styles.listContainer}>
                        <View style={styles.listItem}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            {item === connectedDevice ?
                                <TouchableOpacity style={styles.disconnectButton}>
                                    <Text style={styles.itemButtonText}>Desconectar</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style={styles.connectButton}>
                                    <Text style={styles.itemButtonText}>Conectar</Text>
                                </TouchableOpacity>}
                        </View>
                        <View style={styles.separatorLine} />
                    </View>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 160,
        paddingTop: 80
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500'
    },
    content: {
        flex: 1,
        padding: 16,
        marginTop: 20,
    },
    buttonContainer: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#2786DA',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    },
    listContainer: {
        flex: 1,
        padding: 8,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500'
    },
    connectButton: {
        backgroundColor: '#2786DA',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    disconnectButton: {
        backgroundColor: 'red',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    itemButtonText: {
        color: '#FFF',
        fontWeight: '400'
    },
    separatorLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#000',
        alignSelf: 'center',
        marginTop: 8
    },
})