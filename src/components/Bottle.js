import { View, Text, StyleSheet } from "react-native";

export default function Bottle({ percentage }) {
    return (
        <View>
            <View style={styles.bottle}>
            </View>
            <View style={[styles.background, { height: `${percentage}%` }]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottle: {
        minHeight: 300,
        minWidth: 100,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 4
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    background: {
        position: "absolute",
        bottom: 0,
        borderRadius: 4,
        width: 100,
        maxHeight: 300,
        backgroundColor: '#2786DA'
    }
})