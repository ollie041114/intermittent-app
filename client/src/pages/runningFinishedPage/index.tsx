import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { CustomButton } from "../../shared/customButton";

const hours = 2;
const deposit = 10000;
const distance = 10;

export const RunningFinishedPage = ({
    navigation,
}: {
    navigation: StackNavigationProp<any, any>;
}) => {
    return (
        <SafeAreaView>
            <ScrollView
                style={{ backgroundColor: "#ecf0f1" }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Running is finished!</Text>
                    <View style={styles.statistics}>
                        <Text style={styles.text}>Distance: {distance}km</Text>
                        <Text style={styles.text}>Time: {hours}h</Text>
                        <Text style={styles.text}>
                            Amount earned: {deposit}won
                        </Text>
                    </View>
                    <CustomButton
                        onPress={() => {
                            navigation.navigate("Main Page");
                        }}
                        backgroundColor="black"
                        text="Go to main page"
                    ></CustomButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    statistics: {
        flexDirection: "column",
        justifyContent: "space-between",

        marginTop: 20,
        marginBottom: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50,
        minHeight: Dimensions.get("window").height - 50,
    },
    text: {
        fontSize: 18,
        margin: 3,
    },
});
