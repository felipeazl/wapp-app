import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";
import BottomMenu from "../components/Menu";
import { StatusBar } from "expo-status-bar";
import Bottle from "../components/Bottle";
import { useState } from "react";
import InputModal from "../components/InputModal";

export default function Home({ navigation }) {
    const [showModal, setShowModal] = useState(false)
    const [total, setTotal] = useState(0)
    const [drink, setDrink] = useState(0)
    const [drinkPercentage, setDrinkPercentage] = useState(0)

    const handleTotalChange = (value) => {
        setTotal(value);
        calculatePercentage(value, drink);
    };

    const handleDrinkChange = (value) => {
        setDrink(value);
        calculatePercentage(total, value);
    };

    const calculatePercentage = (totalVal, drinkVal) => {
        const percentage = (drink / total) * 100;
        setDrinkPercentage(percentage);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Header navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.text}>{`Total: ${total}ml`}</Text>
                <Bottle percentage={drinkPercentage} />
            </View>
            {showModal
                ? <InputModal
                    totalValue={total}
                    drinkValue={drink}
                    onTotalChange={handleTotalChange}
                    onDrinkChange={handleDrinkChange}
                    calculatePercentage={calculatePercentage}
                /> : null}
            <BottomMenu modalAction={setShowModal} modalState={showModal} />
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
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
    },
})