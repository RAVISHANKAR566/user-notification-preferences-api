import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('User Notification Preferences API')
    .setDescription('API for managing user notification preferences and sending notifications.')
    .setVersion('1.0')
    .addTag('preferences')
    .addTag('notifications')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000); // NestJS should listen on port 3000
}

bootstrap();

// Export the bootstrap function as the handler for Vercel
export default bootstrap;
