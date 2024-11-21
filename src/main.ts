import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VercelRequest, VercelResponse } from '@vercel/node';  // Import Vercel types

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

  await app.listen(3000);
}

// Add a serverless function handler
export default async (req: VercelRequest, res: VercelResponse) => {
  const app = await NestFactory.create(AppModule);
  await app.init();

  return app.getHttpAdapter().getInstance()(req, res);  // Pass Vercel request/response to NestJS
};
