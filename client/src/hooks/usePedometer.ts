import React, { useState, useEffect } from "react";
import { Pedometer } from "expo-sensors";

export function usePedometer() {
    const [currStepCount, setCurrStepCount1] = useState(0);
    const [pastStepCount, setPastStepCount] = useState(0);
    const [isPedometerAvailable, setIsPedometerAvailable] =
        useState("checking");

    useEffect(() => {
        const _subscription = Pedometer.watchStepCount((result) => {
            setCurrStepCount1(result.steps);
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

    return {
        pastStepCount: pastStepCount,
        currStepCount: currStepCount,
        isPedometerAvailable: isPedometerAvailable,
    };
}
