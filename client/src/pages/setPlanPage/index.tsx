import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { CheckboxArray } from "./components/checkboxArray";
import { HoursDropdown } from "./components/hoursDropdown";
import { DepositInput } from "./components/depositInput";
import { CustomButton } from "shared/customButton";

import { useSelector } from "react-redux";
import { GlobalVariables } from "utils/globalVariables";

const initialWeekMap: Map<string, boolean> = new Map([
    ["mon", false],
    ["tue", false],
    ["wed", false],
    ["thu", false],
    ["fri", false],
    ["sat", false],
    ["sun", false],
]);

export const SetPlanPage = ({
    navigation,
}: {
    navigation: StackNavigationProp<any, any>;
}) => {
    //checkbox array
    const [weekMap, setMap] = useState(initialWeekMap);
    const updateMap = (weekDay: string, value: boolean) => {
        setMap(new Map(weekMap.set(weekDay, value)));
    };

    //dropdown
    const [hoursPerDay, selectHour] = useState(0);
    const dropdownHeight: number = 200;

    //deposit input
    const [depositAmount, setDeposit] = useState(0);

    const id = useSelector((state: { name: string; id: number }) => state.id);

    return (
        <SafeAreaView>
            <ScrollView
                style={{ backgroundColor: "#ecf0f1" }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Select weeks that you want to train
                    </Text>
                    <CheckboxArray updateMap={updateMap} weekMap={weekMap} />

                    <Text style={styles.title}>How many hours per day</Text>
                    <HoursDropdown
                        selectedHour={hoursPerDay}
                        selectHour={selectHour}
                        dropdownHeight={dropdownHeight}
                    />

                    <Text style={styles.title}>Deposit amount</Text>
                    <DepositInput
                        deposit={depositAmount}
                        setDeposit={setDeposit}
                    />

                    <View>
                        <CustomButton
                            onPress={() => {
                                fetch(
                                    `${GlobalVariables.serverHost}:${GlobalVariables.serverPort}/plan`,
                                    {
                                        method: "POST",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            userId: id,
                                            hoursPerDay,
                                            depositAmount,
                                            ...Object.fromEntries(weekMap),
                                        }),
                                    }
                                )
                                    .then((response) => {
                                        console.log("Plan is added");
                                    })
                                    .catch((error) => {
                                        console.log("ERROR: ", error);
                                    });
                            }}
                            text="Save"
                            backgroundColor="black"
                        ></CustomButton>

                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.text}>Selected weekdays:</Text>
                            <View>
                                {Array.from(weekMap, ([key, val]) => {
                                    return (
                                        val && (
                                            <Text style={styles.text} key={key}>
                                                {key}
                                            </Text>
                                        )
                                    );
                                })}
                            </View>
                            <Text></Text>
                            <Text style={styles.text}>
                                Hours per day = {hoursPerDay}
                            </Text>
                            <Text></Text>
                            <Text style={styles.text}>
                                Deposit amount = {depositAmount}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 40,
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingBottom: 50,
        minHeight: Dimensions.get("window").height - 50,
    },
    text: {
        color: "gray",
    },
});
