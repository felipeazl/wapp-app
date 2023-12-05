import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";
import BottomMenu from "../components/Menu";
import { StatusBar } from "expo-status-bar";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Header />
            <View style={styles.content}>
                <Text style={styles.text}>Home</Text>
            </View>
            <BottomMenu />
        </SafeAreaView>
    );
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
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})