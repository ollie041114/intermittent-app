import { useState, useEffect } from "react";
import { ProgressArc } from "./sub/progressArc";
import { Button, View, Text } from "react-native";

export const useColorIndication = (distance: number) => {
    const [colorIndicator, setColorIndicator] = useState("red");
    useEffect(() => {
        distance > 50 ? setColorIndicator("green") : setColorIndicator("red");
    }, [distance]);
    return colorIndicator;
};

export const ProgressCircleWrapper = () => {
    const METERS_IN_STEP = 0.762;

    // const [key, setKey] = useState(0);

    const svgWidth = 150;
    const arcWidth = 12;
    // const colorIndicator = useColorIndication(distance);

    const [add, setAdd] = useState(0);
    // this is just an artificial way to add steps through buttons.
    const [gameCount, setGameCount] = useState(0);
    // this is counting how many rounds you have won/lost.
    const [points, setPoints] = useState(0);
    // this is counting how many points you have won/lost so far.
    const [end, setEnd] = useState(false);
    // this is going to be

    return (
        <View>
            <Text>
                Game number: {gameCount}
                Points: {points}
            </Text>
            <ProgressArc
                // keyManagement = {{key, setKey}}
                svgWidth={svgWidth}
                arcWidth={arcWidth}
                add={add}
                game={{ gameCount, setGameCount }}
                points={{ points, setPoints }}
            />
            <Button
                onPress={() => {
                    setAdd(add + 1);
                    console.debug(add);
                }}
                title="+"
            />
            <Button
                onPress={() => {
                    setAdd(add - 1);
                }}
                title="-"
            />
        </View>
    );
};
