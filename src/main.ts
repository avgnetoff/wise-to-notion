import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Capture raw body for potential signature verification on webhooks
  app.use(
    json({
      verify: (req: any, _res, buf) => {
        req.rawBody = buf?.toString('utf8');
      },
    }),
  );
  app.use(
    urlencoded({
      extended: true,
      verify: (req: any, _res, buf) => {
        req.rawBody = buf?.toString('utf8');
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
