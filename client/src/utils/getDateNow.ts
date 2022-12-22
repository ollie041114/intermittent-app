export const dateNowKR = () => {
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const nowUTC = new Date();
    const nowKorea = nowUTC.getTime() + KR_TIME_DIFF;
    return new Date(nowKorea);
};
