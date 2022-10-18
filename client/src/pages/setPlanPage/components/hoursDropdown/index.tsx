import React, { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

DropDownPicker.setListMode("SCROLLVIEW");

export const HoursDropdown = ({
    selectedHour,
    selectHour,
    dropdownHeight,
}: {
    selectedHour: number;
    selectHour: Dispatch<SetStateAction<number>>;
    dropdownHeight: number;
}) => {
    const hours = Array.from({ length: 23 }, (_, i) => i + 1).map((hour) => {
        return { label: hour.toString(), value: hour };
    });
    const [items] = useState(hours);
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.hoursDropdown}>
            <DropDownPicker
                placeholder="Select hours"
                listItemContainerStyle={{
                    height: 30,
                }}
                dropDownContainerStyle={{
                    height: dropdownHeight,
                }}
                closeAfterSelecting={true}
                open={open}
                value={selectedHour}
                items={items}
                setOpen={setOpen}
                setValue={selectHour}
            />
            <View
                style={
                    open
                        ? { marginBottom: dropdownHeight }
                        : { marginBottom: 0 }
                }
            ></View>
        </View>
    );
};

const styles = StyleSheet.create({
    hoursDropdown: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
});
