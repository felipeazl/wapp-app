
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import InputField from "../components/InputField";
import LogoSVG from "../components/svg/Logo";
import SubmitButton from "../components/SubmitButton";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function LoginScreen({ navigation, setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disableButton, setDisableButton] = useState(true);

    function handleInputChange(email, password) {
        setEmail(email);
        setPassword(password);

        const isValid = email.length > 0 && password.length > 0;
        setDisableButton(!isValid);
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setEmail('');
                setPassword('');
                setUser(user);
                navigation.navigate('Home')
            })
            .catch((error) => {
                const errorCode = error.codel;
                const errorMessage = error.message;
                alert(`${errorCode}: ${errorMessage}`)
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <LogoSVG width={146} height={47} />
                </View>
                <InputField label={'Email'} type={'email'} value={email} handleChangeText={(value) => handleInputChange(value, password)} />
                <InputField label={'Senha'} type={'password'} value={password} handleChangeText={(value) => handleInputChange(email, value)} />
                <SubmitButton label={'Login'} onPress={handleLogin} isDisable={disableButton} />
                <View style={styles.options}>
                    <View style={styles.line} />
                    <Text style={styles.optionText}>ou</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.toRegister}>
                    <Text style={styles.text}>Ainda não tem cadastro?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
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
        marginBottom: 120
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
    toRegister: {
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