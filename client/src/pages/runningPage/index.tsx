import { ProgressCircleWrapper } from "./components/progressCircleWrapper";
import { Pedo } from "./components/pedometer";
import React, { useEffect, useState } from "react";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { CustomButton } from "../../shared/customButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RunningPlan } from "shared/entities/runningPlan.entity";

export const RunningPage = ({
    navigation,
    route,
}: {
    navigation: StackNavigationProp<any, any>;
    route: any;
}) => {
    const [curTime, setTime] = useState(Date.now());
    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    const {
        runningPlan,
        startTime,
    }: { runningPlan: RunningPlan; startTime: number } = route.params;
    const [earnedDeposit, increaseDeposit] = useState(0);
    return (
        <SafeAreaView>
            <ScrollView
                style={{ backgroundColor: "#ecf0f1" }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.container}>
                    <Text>
                        Deposit = {runningPlan.depositAmount} / {earnedDeposit}
                    </Text>
                    <Text>
                        Hours = {runningPlan.hoursPerDay} /{" "}
                        {(
                            (Math.floor(
                                Math.floor(curTime - startTime) / 1000
                            ) /
                                3600) *
                            100
                        ).toPrecision(5)}
                        %
                    </Text>
                    <ProgressCircleWrapper increaseDeposit={increaseDeposit} />
                    <Pedo />
                    <View style={{ marginTop: 25 }}></View>
                    <CustomButton
                        onPress={() => {
                            navigation.navigate("Running Finished Page");
                        }}
                        backgroundColor="black"
                        text="Finish running"
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
        paddingBottom: 50,
        minHeight: Dimensions.get("window").height - 50,
    },
});
