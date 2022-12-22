import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Pedometer } from "expo-sensors";

export const Pedo = (props: any) => {
    const { currStepCount, setCurrStepCount } = props;
    // console.log(currStepCount);
    // console.log(setCurrStepCount);
    const [pastStepCount, setPastStepCount] = useState(0);
    const [isPedometerAvailable, setIsPedometerAvailable] =
        useState("checking");

    useEffect(() => {
        const _subscription = Pedometer.watchStepCount((result) => {
            setCurrStepCount(result.steps);
        });
        Pedometer.isAvailableAsync().then(
            (result) => {
                setIsPedometerAvailable(String(result));
            },
            (error) => {
                setIsPedometerAvailable(
                    "Could not get isPedometerAvailable: " + error
                );
            }
        );
    }, []);

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
        (result) => {
            setPastStepCount(result.steps);
        },
        (error) => {
            setPastStepCount(0);
        }
    );
    return (
        <View>
            <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
            <Text>Walk! And watch this go up: {currStepCount}</Text>
        </View>
    );
};
