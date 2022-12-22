export class Plan {
    weekMap: Map<string, boolean>;
    hoursPerDay: number;
    depositAmount: number;
    constructor(
        weekMap: Map<string, boolean> = new Map(),
        hoursPerDay: number = 0,
        depositAmount: number = 0
    ) {
        this.weekMap = weekMap;
        this.hoursPerDay = hoursPerDay;
        this.depositAmount = depositAmount;
    }
}
