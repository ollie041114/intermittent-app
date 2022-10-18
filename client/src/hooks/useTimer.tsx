import { useEffect, useState } from "react";
import { getNormalNumber } from "utils/getNormalDistribution";

const getInitParams = (targetVelocity: number, targetDistance: number) => {
    const targetTime = targetDistance / targetVelocity;
    const rX0 = Math.random() * (targetDistance / 3);
    // the reward will appear in the first third of the thing.
    const zScore = 0.86;
    // Approximately 81th percentile
    const stDev = 50;
    const mean = targetDistance - zScore * stDev;

    const rX = getNormalNumber(mean, stDev);
    // console.log(rX);
    // Player will reach the reward 81% of the time, based on the failure rate.
    const rV = (rX - rX0) / targetTime;
    return {
        rV: rV,
        rX0: rX0,
    };
};

type uniformPopsParams = {
    v0: number;
    x0: number;
    t: number;
};
const getUniformPosition = ({ v0, x0, t }: uniformPopsParams) => {
    const x = x0 + v0 * t;
    return x;
};

const useRewardPosition = (targetVelocity: any, targetDistance: any) => {
    const [rV, setRV] = useState(0);
    const [rX0, setRX0] = useState(0);
    const [loading, setLoading] = useState(true);
    const [rewardPos, setRewardPos] = useState(0);
    const [lost, setLost] = useState(false);
    const [timer, setTimer] = useState(0);

    const resetReward = () => {
        // set every state to 0
        const { rV, rX0 } = getInitParams(targetVelocity, targetDistance);
        setRV(rV);
        setRX0(rX0);
        setTimer(0);
        const rewardPos = getUniformPosition({ v0: rV, x0: rX0, t: timer });
        setRewardPos(rewardPos);
        setLost(false);
    };

    const dt = 200;
    // how often to update the position. By default, 200ms.
    useEffect(() => {
        resetReward();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setTimer(timer + 1), 1000);

        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
        const rewardPos = getUniformPosition({ v0: rV, x0: rX0, t: timer });
        setRewardPos(rewardPos);
    }, [timer]);

    return {
        time: timer,
        rewardPos: getUniformPosition({
            v0: rV,
            x0: rX0,
            t: timer,
        } as uniformPopsParams),
        loading: loading,
        lost: lost,
        resetReward: resetReward,
    };
};

export { useRewardPosition };
