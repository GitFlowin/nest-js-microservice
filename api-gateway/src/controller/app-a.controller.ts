import { Controller, Get } from '@nestjs/common';
import { AppAService } from '../service/app-a.service';

@Controller('service-a')
export class AppAController {
  constructor(private readonly appService: AppAService) { }

  @Get('ping')
  pingServiceA(): object {
    return this.appService.pingServiceA();
  }
}
