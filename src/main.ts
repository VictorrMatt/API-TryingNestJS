import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* SWAGGER */
  const config = new DocumentBuilder()
    .setTitle('Create Posts')
    .setDescription('Create posts simple api')
    .setVersion('1.0')
    /*     .addTag('Others')
     */ .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
