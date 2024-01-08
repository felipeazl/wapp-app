import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function UserModal({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        right: 30,
        top: 100,
        zIndex: 99,
        padding: 16,
        width: 160,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    button: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 4,

    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    }
})