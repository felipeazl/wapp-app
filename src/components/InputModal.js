import { StyleSheet, View, Text, TextInput } from "react-native";
import { useEffect } from "react";

export default function InputModal({ totalValue, drinkValue, onTotalChange, onDrinkChange, calculatePercentage }) {

    useEffect(() => {
        calculatePercentage(totalValue, drinkValue);
    }, [totalValue, drinkValue]);

    return (
        <View style={styles.container}>
            <View style={styles.inputField}>
                <Text style={styles.text}>Total:</Text>
                <TextInput
                    style={styles.textField}
                    value={totalValue.toString()}
                    keyboardType="numeric"
                    onChangeText={(value) => {
                        const numericValue = value !== '' ? parseInt(value, 10) : 0;
                        onTotalChange(numericValue);
                    }}
                />
            </View>
            <View style={styles.inputField}>
                <Text style={styles.text}>Já bebi:</Text>
                <TextInput
                    style={styles.textField}
                    value={drinkValue.toString()}
                    keyboardType="numeric"
                    onChangeText={(value) => {
                        const numericValue = value !== '' ? parseInt(value, 10) : 0;
                        onDrinkChange(numericValue);
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 20,
        bottom: 100,
        zIndex: 99,
        padding: 16,
        width: '90%',
        backgroundColor: '#e5e5e5',
        borderRadius: 8,
    },
    inputField: {
        flexDirection: 'row',
        padding: 8,
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500'
    },
    textField: {
        backgroundColor: '#fff',
        width: '60%',
        marginLeft: 10,
        padding: 8,
        borderRadius: 4,
    }
})