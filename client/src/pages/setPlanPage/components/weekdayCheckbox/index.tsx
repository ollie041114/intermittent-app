import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "expo-checkbox";

type CheckboxState = {
    react: boolean;
    next: boolean;
    vue: boolean;
    angular: boolean;
};

export const WeekCheckbox = ({
    updateMap,
    weekMap,
    weekDay,
}: {
    updateMap: (weekDay: string, value: boolean) => void;
    weekMap: Map<string, boolean>;
    weekDay: string;
}) => {
    return (
        <View style={styles.checkboxWrapper}>
            <Text style={styles.weekDayText}>{weekDay}</Text>
            <CheckBox
                value={weekMap.get(weekDay)}
                onValueChange={(value) => {
                    updateMap(weekDay, value);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    checkboxWrapper: {
        flexDirection: "column",
        alignItems: "center",
        paddingVertical: 5,
    },
    weekDayText: {
        marginBottom: 10,
    },
});
