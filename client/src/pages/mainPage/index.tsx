import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
    Alert,
    Button,
    Dimensions,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { CustomButton } from "../../shared/customButton";

import { useSelector } from "react-redux";
import { GlobalVariables } from "utils/globalVariables";

export const MainPage = ({
    navigation,
}: {
    navigation: StackNavigationProp<any, any>;
}) => {
    const [name, id] = useSelector((state: { name: string; id: number }) => [
        state.name,
        state.id,
    ]);

    return (
        <SafeAreaView>
            <ScrollView
                style={{ backgroundColor: "#ecf0f1" }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <Text style={styles.greeting}>Hello {name}</Text>
                <View style={styles.container}>
                    <CustomButton
                        onPress={() => {
                            navigation.navigate("Set Plan Page");
                        }}
                        backgroundColor="black"
                        text="Set Plan For A Week"
                    ></CustomButton>
                    <View style={{ margin: 20 }}></View>
                    <CustomButton
                        onPress={() => {
                            fetch(
                                `${GlobalVariables.serverHost}:${GlobalVariables.serverPort}/${id}`,
                                {
                                    method: "GET",
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json",
                                    },
                                }
                            )
                                .then((response) => response.json())
                                .then((plansFromServer) => {
                                    navigation.navigate("Check Plan Page", {
                                        plansFromServer,
                                    });
                                })
                                .catch((error) => {
                                    console.log("ERROR: ", error);
                                });
                        }}
                        backgroundColor="black"
                        text="Check My Plan"
                    ></CustomButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 500,
        // minHeight: Dimensions.get("window").height - 50,
    },
    button: {
        width: 200,
        height: 44,
        padding: 10,
        marginBottom: 50,

        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
        textAlign: "center",
    },

    greeting: {
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        textAlign: "center",
        marginTop: 30,
    },
});
