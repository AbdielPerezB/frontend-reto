import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Solo recibo data en mi dto
      forbidNonWhitelisted:true, //Si viene basura fuera del dto regresa bad request
      transformOptions: {
        exposeUnsetFields: false,
        enableImplicitConversion: true //convierte en automático el tipo de dato especificado en el dto
      },
      transform: true,
    })
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
