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

const weekDaysMap: Map<string, boolean> = new Map([
    ["Mon", true],
    ["Tue", false],
    ["Wed", true],
    ["Thu", false],
    ["Fri", true],
    ["Sat", false],
    ["Sun", false],
]);
const weekNamesArray: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];

const hours = 2;
const deposit = 10000;
const dateNowKR = () => {
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const nowUTC = new Date();
    const nowKorea = nowUTC.getTime() + KR_TIME_DIFF;
    return new Date(nowKorea);
};

export const CheckPlanPage = ({
    navigation,
}: {
    navigation: StackNavigationProp<any, any>;
}) => {
    //checkbox array
    const currentDate: Date = dateNowKR();
    const currentWeekday: number = currentDate.getDay();
    const currentWeekdayName: string = weekNamesArray[currentWeekday];
    return (
        <SafeAreaView>
            <ScrollView
                style={{ backgroundColor: "#ecf0f1" }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.container}>
                    {/* {weekDaysMap.get(currentWeekdayName) ? ( */}
                    {true ? (
                        <View style={styles.container}>
                            <Text style={styles.title}>
                                You can start training
                            </Text>
                            <CustomButton
                                onPress={() => {
                                    navigation.navigate("Start Running Page");
                                }}
                                backgroundColor="black"
                                text="Start running"
                            ></CustomButton>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.title}>
                                Currently is not a training day
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 40,
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
        color: "gray",
    },
});
