import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
      await this.appService.createPlan(planDTO);
      return true;
    } catch (error: any) {
      throw error;
    }
  }
  @Get('/:id')
  async getPlan(@Param('id') id: number) {
    try {
      return await this.appService.getPlan(id);
    } catch (error: any) {
      throw error;
    }
  }
}
