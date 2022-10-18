import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export const CustomButton = ({
    onPress,
    backgroundColor,
    text,
}: {
    onPress: () => void;
    backgroundColor: string;
    text: string;
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.button, { backgroundColor }]}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 44,
        padding: 10,
        marginBottom: 20,
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
});
