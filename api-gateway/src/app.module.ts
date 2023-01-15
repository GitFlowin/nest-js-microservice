import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppAController } from './controller/app-a.controller';
import { AppBController } from './controller/app-b.controller';
import { AppAService } from './service/app-a.service';
import { AppBService } from './service/app-b.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_A',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8001,
        },
      },
      {
        name: 'SERVICE_B',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8002,
        },
      },
    ]),
  ],
  controllers: [AppAController, AppBController],
  providers: [AppAService, AppBService],
})
export class AppModule {}
