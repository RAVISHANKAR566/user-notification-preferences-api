import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('User Notification Preferences API') // Title of the API
    .setDescription(
      'API for managing user notification preferences and sending notifications.',
    ) // Description
    .setVersion('1.0') // Version
    .addTag('preferences') // Optional: a tag to group related routes
    .addTag('notifications') // Optional: another tag for the notifications API
    .build(); // Build the config
  const document = SwaggerModule.createDocument(app, config); // Create the Swagger document
  SwaggerModule.setup('api', app, document); // Set up Swagger UI at the `/api` route

  await app.listen(3000); // Start the NestJS app
}
bootstrap();
