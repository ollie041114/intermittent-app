import { IsBoolean, IsNumber } from 'class-validator';

export class PlanDTO {
  @IsBoolean() readonly mon: boolean;
  @IsBoolean() readonly tue: boolean;
  @IsBoolean() readonly wed: boolean;
  @IsBoolean() readonly thu: boolean;
  @IsBoolean() readonly fri: boolean;
  @IsBoolean() readonly sat: boolean;
  @IsBoolean() readonly sun: boolean;
  @IsNumber() readonly depositAmount: number;
  @IsNumber() readonly hoursPerDay: number;
  @IsNumber() readonly userId: number;
}
