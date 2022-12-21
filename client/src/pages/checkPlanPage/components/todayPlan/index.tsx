import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Plan } from "shared/entities/plan.entity";

export const TodayPlan = ({
    selectPlan,
    plan,
    select,
}: {
    selectPlan: Dispatch<SetStateAction<Plan>>;
    select: Dispatch<SetStateAction<boolean>>;
    plan: Plan;
}) => {
    const days: string[] = [];
    plan.weekMap.forEach((value, key) => {
        if (value) {
            let copy: string =
                key[0].toUpperCase() + key.substring(1, key.length);
            days.push(copy);
        }
    });
    return (
        <TouchableOpacity
            style={{ width: 300 }}
            onPress={() => {
                select(true);
                selectPlan(plan);
            }}
        >
            <View style={styles.todayPlan}>
                <Text style={styles.text}>
                    Deposit ={" "}
                    <Text style={styles.textValue}>{plan.depositAmount}W</Text>
                </Text>
                <Text style={styles.text}>
                    Hours set ={" "}
                    <Text style={styles.textValue}>{plan.hoursPerDay}h</Text>
                </Text>
                <Text style={styles.text}>
                    Days:{" "}
                    <Text style={styles.textValue}>{days.join(",  ")}</Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todayPlan: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        paddingVertical: 10,
        // paddingRight: 200,
        paddingLeft: 20,
        backgroundColor: "#fff",
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: "#000",
    },
    text: {
        alignSelf: "flex-start",
        fontSize: 15,
    },
    textValue: {
        fontWeight: "bold",
        color: "blue",
    },
});
