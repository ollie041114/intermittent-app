export class RunningPlan {
    hoursPerDay: number;
    depositAmount: number;
    constructor(hoursPerDay: number = 0, depositAmount: number = 0) {
        this.hoursPerDay = hoursPerDay;
        this.depositAmount = depositAmount;
    }
}
