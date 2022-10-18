import { PlanDTO } from '../dto/planDTO';

export const MOCKUP_PLANS: PlanDTO[] = Array.from({ length: 2 }, (_, idx) => {
  const numStr = idx.toString(10);
  return {
    mon: true,
    tue: false,
    wed: true,
    thu: false,
    fri: true,
    sat: false,
    sun: false,
    depositAmount: 10000,
    hoursPerDay: 2,
    userId: 1,
  };
}).slice(1);
