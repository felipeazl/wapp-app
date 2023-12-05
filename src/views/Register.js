import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import InputField from "../components/InputField";
import LogoSVG from "../components/svg/Logo";
import SubmitButton from "../components/SubmitButton";
import { useEffect, useState } from "react";

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disableButton, setDisableButton] = useState(true);


    function handleInputChange(email, password, confirmPassword) {
        setEmail(email);
        setPassword(password);
        setConfirmPassword(confirmPassword);

        const isValid = email.length > 0 && password.length > 0 && password === confirmPassword;
        setDisableButton(!isValid);
    };

    function handleRegistration() {
        alert(email + password + confirmPassword);
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <LogoSVG width={146} height={47} />
                </View>
                <InputField label={'Email'} type={'email'} value={email} handleChangeText={(value) => handleInputChange(value, password, confirmPassword)} />
                <InputField label={'Senha'} type={'password'} value={password} handleChangeText={(value) => handleInputChange(email, value, confirmPassword)} />
                <InputField label={'Confirmar Senha'} type={'password'} value={confirmPassword} handleChangeText={(value) => handleInputChange(email, password, value)} />
                <SubmitButton label={'Registrar'} onPress={handleRegistration} isDisable={disableButton} />
                <View style={styles.options}>
                    <View style={styles.line} />
                    <Text style={styles.optionText}>ou</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.toLogin}>
                    <Text style={styles.text}>Ainda não tem cadastro?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>Criar conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    logo: {
        marginBottom: 80
    },
    options: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    optionText: {
        color: '#D9D9D9',
        fontSize: 16,
        fontWeight: '700',
    },
    line: {
        width: 130,
        height: 2,
        backgroundColor: '#D9D9D9'
    },
    toLogin: {
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '700'
    },
    link: {
        fontSize: 16,
        fontWeight: '700',
        color: '#2786DA'
    }
})