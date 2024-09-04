import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* SWAGGER */
  const config = new DocumentBuilder()
    .setTitle('Create Posts')
    .setDescription('Create posts simple api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // Use o caminho absoluto para o arquivo CSS
  const customCss = fs.readFileSync(
    path.join(__dirname, '..', 'src', 'assets', 'SwaggerDark.css'),
    'utf8',
  );

  // Setup do Swagger com CSS customizado
  SwaggerModule.setup('api', app, document, {
    customCss,
  });

  await app.listen(3000);
}
bootstrap();
