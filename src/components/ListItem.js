import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";

export default function ListItem(itemName, itemId, connectFunction, disconnectFunction, connectedDevice) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{itemName}</Text>
            {itemId === connectedDevice
                ? <TouchableOpacity style={styles.connectButton} onPress={connectFunction}>
                    <Text style={styles.buttonText}>Conectar</Text>
                </TouchableOpacity>
                : <TouchableOpacity style={styles.disconnectButton} onPress={disconnectFunction}>
                    <Text style={styles.buttonText}>Desconectar</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    listContainer: {},
    itemContainer: {},
    itemName: {},
    buttonText: {},
    connectButton: {},
    disconnectButton: {},
    line: {}
})