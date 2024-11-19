import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { PreferencesController } from './preferences/preferences.controller';
import { PreferencesService } from './preferences/preference.service';
import {
  UserPreference,
  UserPreferenceSchema,
} from './schemas/user-preference.schema';
import {
  NotificationLog,
  NotificationLogSchema,
} from './schemas/notification-log.schema';
import { NotificationService } from './notification/notification.service';
import { NotificationController } from './notification/notification.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule globally available
    }),
    MongooseModule.forRoot(process.env.MONGO_URI), // MongoDB URI from .env
    MongooseModule.forFeature([
      { name: UserPreference.name, schema: UserPreferenceSchema },
      { name: NotificationLog.name, schema: NotificationLogSchema },
    ]),
  ],
  controllers: [PreferencesController, NotificationController],
  providers: [PreferencesService, NotificationService],
})
export class AppModule {}
