import * as React from "react";

import { Circle, G, Text } from "react-native-svg";

export interface CircleCursorProps {
    arcRadius: number;
    r: number;
    borderWidth: number;
    borderColor: string;
    distance: number;
    width: number;
    targetDistance: number;
    children?: any;
}

export const CircleCursor = ({
    arcRadius,
    r,
    borderWidth,
    borderColor,
    distance,
    targetDistance,
    children,
}: CircleCursorProps) => {
    var ang = (Math.PI * 2 * distance) / targetDistance;
    var cx = arcRadius * Math.sin(ang);
    var cy = -arcRadius * Math.cos(ang);

    return (
        <G>
            <Circle cx={cx} cy={cy} r={r} stroke={borderColor} fill="white" />
            {children ? (
                <Text
                    x={cx}
                    y={cy}
                    fill="black"
                    fontSize="10"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                >
                    {children}
                </Text>
            ) : null}
        </G>
    );
};
