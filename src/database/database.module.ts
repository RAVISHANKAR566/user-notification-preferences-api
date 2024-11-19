// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Ensure global config usage
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const mongoUri = configService.get<string>('MONGO_URI');
        console.log('Mongo URI:', mongoUri); // Log to check if the URI is loaded correctly
        return {
          uri: mongoUri, // Pass the URI to Mongoose
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
