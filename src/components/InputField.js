import { StyleSheet, View, TextInput, Text } from "react-native";

export default function InputField({ label, type, value, handleChangeText }) {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleChangeText}
                mode="outlined"
                value={value}
                secureTextEntry={type === 'password'}
                keyboardType={type === 'email' ? 'email-address' : 'default'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    label: {
        fontSize: 16,
        fontWeight: '500'
    },
    input: {
        height: 60,
        width: 320,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 8,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        shadowColor: 'transparent',
        elevation: 0,
    }
})