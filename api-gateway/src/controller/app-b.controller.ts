import { Controller, Get } from '@nestjs/common';
import { AppBService } from '../service/app-b.service';

@Controller('service-b')
export class AppBController {
    constructor(private readonly appService: AppBService) { }

    @Get('ping')
    pingServiceB(): object {
        return this.appService.pingServiceB();
    }
}