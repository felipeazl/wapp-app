import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import LogoSVG from "./svg/Logo";

export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.circleContainer}>
                <Feather name="menu" size={32} color="black" />
            </TouchableOpacity>
            <View>
                <LogoSVG width={74} height={24} />
            </View>
            <TouchableOpacity>
                <Ionicons name="person-circle" size={42} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    circleContainer: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        elevation: 4,
    }
})