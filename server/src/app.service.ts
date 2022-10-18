import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { PlanDTO } from './dto/planDTO';
import { UserDTO } from './dto/userDTO';

import { Plan } from './entities/plan.entity';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource() private dataSource: DataSource,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Plan)
    private planRepository: Repository<Plan>,
  ) {
    if (process.env.NODE_ENV !== 'production') this.devInit();
  }

  async createUser(userDTO: UserDTO): Promise<User> {
    try {
      return await this.userRepository.save(userDTO);
    } catch (error: any) {
      console.log(error);
      return null;
    }
  }

  async createPlan(planDTO: PlanDTO): Promise<Plan> {
    try {
      return await this.planRepository.save(planDTO);
    } catch (error: any) {
      console.log(error);
      return null;
    }
  }

  async devInit() {
    await Promise.all([
      this.dataSource.getRepository(User).clear(),
      this.dataSource.getRepository(Plan).clear(),
    ]).catch((error) => {
      console.log('Cannot use clear with foreign keys');
    });

    const { MOCKUP_USERS } = await import('./mockup/users.mockup');
    const { MOCKUP_PLANS } = await import('./mockup/plans.mockup');

    MOCKUP_USERS.reduce(async (prev, mockup) => {
      await prev;
      return this.createUser(mockup);
    }, Promise.resolve() as any);

    MOCKUP_PLANS.reduce(async (prev, mockup) => {
      await prev;
      return this.createPlan(mockup);
    }, Promise.resolve() as any);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
