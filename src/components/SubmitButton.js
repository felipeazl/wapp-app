import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function SubmitButton({ label, onPress, isDisable }) {
    return (
        <TouchableOpacity onPress={onPress} disabled={isDisable}>
            <View style={[styles.container, isDisable ? styles.disabledButton : styles.enabledButton]}>
                <Text style={styles.text}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        height: 60,
        width: 320,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 8,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        shadowColor: 'transparent',
        elevation: 0,
    },
    disabledButton: {
        backgroundColor: '#D9D9D9'
    },
    enabledButton: {
        backgroundColor: '#2786DA'
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '700',
    }
})