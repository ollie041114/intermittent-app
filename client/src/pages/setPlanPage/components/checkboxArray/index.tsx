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
                weekDay="Mon"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="Tue"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="Wen"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="Thu"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="Fri"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="Sat"
            ></WeekCheckbox>
            <WeekCheckbox
                updateMap={updateMap}
                weekMap={weekMap}
                weekDay="Sun"
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
