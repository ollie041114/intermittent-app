// Thanks to https://medium.com/@swathylenjini/react-creating-a-circular-progress-using-custom-hook-d3-js-e31af6b0ea0b
import * as d3 from "d3";
import { CircleCursor, CircleCursorProps } from "./circle";
import { Svg, G, Path, Text, Circle, Line, Rect } from "react-native-svg";
import { View } from "react-native";
import { useRewardPosition } from "hooks/useTimer";
import { useEffect, useState } from "react";
import { getMetersPerSecond } from "utils/getMetersPerSecond";
import { usePedometer } from "hooks/usePedometer";

type RewardPlayerProps = {
    // reset: number,
    gameCount: number;
    arcRadius: number;
    r: number;
    borderWidth: number;
    borderColor: string;
    width: number;
    targetDistance: number;
    targetVelocity: number;
    parentCallback: any;
    add?: number;
};

const Reward = (props: RewardPlayerProps) => {
    const { targetVelocity, targetDistance } = props;
    const { time, rewardPos, loading, lost, resetReward } = useRewardPosition(
        targetVelocity,
        targetDistance
    );
    useEffect(() => {
        props.parentCallback(rewardPos);
    }, [rewardPos]);

    useEffect(() => {
        resetReward();
    }, [props.gameCount]);
    return (
        <CircleCursor distance={rewardPos} {...props}>
            10
        </CircleCursor>
    );
};

const Player = (props: RewardPlayerProps) => {
    const METERS_IN_STEP = 0.762;
    // const add = props.add;
    const { currStepCount } = usePedometer();
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        setDistance(currStepCount * METERS_IN_STEP);
    }, [currStepCount]);

    useEffect(() => {
        setDistance(props.add);
        console.debug(props.add);
    }, [props.add]);

    useEffect(() => {
        // reset every state
        setDistance(0);
    }, [props.gameCount]);

    useEffect(() => {
        props.parentCallback(distance);
    }, [distance]);

    return <CircleCursor distance={distance} {...props} />;
};

export const ProgressArc = (props: any) => {
    // keeps track of how many games were lost or won

    const TARGET_SPEED_KM_H = 8; //
    const targetDistance = 300; // target distance for this circle
    // 2 km -> 7 circles
    // TargetDistance (2km), targetSpeed (),
    const metersPerSecond = getMetersPerSecond(TARGET_SPEED_KM_H);

    const targetVelocity = metersPerSecond; // meters per second

    const { gameCount, setGameCount } = props.game;
    const { points, setPoints } = props.points;

    const [playerDistance, setPlayerDistance] = useState(0);
    const [rewardDistance, setRewardDistance] = useState(0);
    // callbacks, are set inside of Player and Reward components.

    // const [points, setPoints] = useState(0);

    useEffect(() => {
        var color = "red";
        if (rewardDistance >= targetDistance) {
            // if the reward reached the target distance faster than you
            console.debug("You lost!");
            setGameCount(gameCount + 1);
        } else {
            if (rewardDistance - playerDistance < 50) {
                color = "green";
                setColor(color);
                if (rewardDistance - playerDistance <= 0) {
                    console.debug("You won!");
                    setPoints(points + 1);
                    setGameCount(gameCount + 1);
                }
            }
        }
    }, [playerDistance, rewardDistance]);

    const { svgWidth, arcWidth, colorIndicator } = props;
    const svgHeight = svgWidth;
    const arcOuterRadius = svgWidth / 2;
    const arcInnerRadius = svgWidth / 2 - arcWidth;

    const arcGenerator: any = d3
        .arc()
        .innerRadius(arcInnerRadius)
        .startAngle(0)
        .cornerRadius(5);

    const progressArc = (value: number) =>
        arcGenerator({
            endAngle: 2 * Math.PI * value,
            innerRadius: arcInnerRadius,
            outerRadius: arcOuterRadius,
            cornerRadius: 5,
        });

    const middleRadius = Math.ceil((arcInnerRadius + arcOuterRadius) / 2);

    const [color, setColor] = useState("red");

    return (
        <View>
            <Svg width={svgWidth} height={svgHeight}>
                <G transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
                    <Path d={progressArc(1)} opacity="0.2" fill="#e5e5e5" />
                </G>

                <G transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
                    <Path
                        d={progressArc(playerDistance / targetDistance)}
                        fill={color}
                    />
                    <Reward
                        gameCount={gameCount}
                        arcRadius={middleRadius}
                        r={10}
                        borderWidth={2}
                        borderColor={"red"}
                        width={svgWidth}
                        targetDistance={targetDistance}
                        targetVelocity={targetVelocity}
                        parentCallback={setRewardDistance}
                    />
                    <Player
                        gameCount={gameCount}
                        arcRadius={middleRadius}
                        r={7}
                        add={props.add}
                        borderWidth={2}
                        borderColor={"blue"}
                        width={svgWidth}
                        targetDistance={targetDistance}
                        targetVelocity={targetVelocity}
                        parentCallback={setPlayerDistance}
                    />
                </G>
            </Svg>
        </View>
    );
};
