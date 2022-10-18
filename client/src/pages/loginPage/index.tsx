import React, { useState } from "react";
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
import { CustomButton } from "shared/customButton";

import { useDispatch } from "react-redux";
import { setName, setId } from "../../reduxStore";

export const LoginPage = ({
    navigation,
}: {
    navigation: StackNavigationProp<any, any>;
}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const setInfo = () => {
        dispatch(setName(username));
        dispatch(setId(1));
    };
    return (
        <SafeAreaView>
            <ScrollView
                style={{ backgroundColor: "#ecf0f1" }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Login Page</Text>
                    <TextInput
                        value={username}
                        onChangeText={(username) => setUsername(username)}
                        placeholder={"Username"}
                        style={styles.input}
                    />
                    <TextInput
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        placeholder={"Password"}
                        secureTextEntry={true}
                        style={styles.input}
                    />

                    <CustomButton
                        onPress={() => {
                            setInfo();
                            navigation.navigate("Main Page");
                        }}
                        backgroundColor="black"
                        text="Login"
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
        minHeight: Dimensions.get("window").height - 50,
    },

    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10,
    },

    title: {
        fontSize: 20,
        margin: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
        textAlign: "center",
    },
});
