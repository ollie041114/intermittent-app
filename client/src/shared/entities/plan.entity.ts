export class Plan {
    weekMap: Map<string, boolean>;
    hoursPerDay: number;
    depositAmount: number;
    constructor(
        weekMap: Map<string, boolean>,
        hoursPerDay: number,
        depositAmount: number
    ) {
        this.weekMap = weekMap;
        this.hoursPerDay = hoursPerDay;
        this.depositAmount = depositAmount;
    }
}
