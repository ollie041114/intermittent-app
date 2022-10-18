import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PlanDTO } from './dto/planDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('plan')
  async addPlan(@Body() planDTO: PlanDTO) {
    try {
      console.log(planDTO);
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }
}
