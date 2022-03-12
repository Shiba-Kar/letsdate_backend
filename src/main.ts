import { ValidationPipe } from '@nestjs/common';
import { NestFactory} from '@nestjs/core';
import { DocumentBuilder, SwaggerModule ,SwaggerCustomOptions} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  

  const config = new DocumentBuilder()
    .setTitle('Lets Date')
    .setDescription('The Lets Date API description')
    .addBearerAuth()
    .setVersion('1.0')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('doc', app, document, {customCssUrl: './swagger.css'});

  await app.listen(process.env.PORT || 3000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
