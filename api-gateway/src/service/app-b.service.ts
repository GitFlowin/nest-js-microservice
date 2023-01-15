import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class AppBService {
    constructor(
        @Inject("SERVICE_B") private readonly clientServiceB: ClientProxy
    ) { }

    pingServiceB(): object {
        const startTs = Date.now();
        const pattern = { cmd: "ping" };
        const payload = {};

        return this.clientServiceB.send(pattern, payload).pipe(
            map((message: string) => ({ message, duration: `${Date.now() - startTs}ms` }))
        )
    }
}
