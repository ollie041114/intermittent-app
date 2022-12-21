import React from "react";
import { StyleSheet, View } from "react-native";
import { WeekCheckbox } from "../weekdayCheckbox";

export const CheckboxArray = ({
    updateMap,
    weekMap,
}: {
    updateMap: (weekDay: string, value: boolean) => void;
    weekMap: Map<string, boolean>;
}) => {
    return (
        <View style={styles.checkboxArray}>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="mon"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="tue"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="wed"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="thu"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="fri"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="sat"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="sun"
            ></WeekCheckbox>
        </View>
    );
};

const styles = StyleSheet.create({
    checkboxArray: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#ecf0f1",
        width: "100%",
        marginTop: 20,
        paddingHorizontal: 20,
    },
});
