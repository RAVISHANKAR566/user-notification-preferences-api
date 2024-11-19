import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreferencesService } from './preference.service';
import { PreferencesController } from './preferences.controller';
import {
  UserPreference,
  UserPreferenceSchema,
} from '../schemas/user-preference.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserPreference', schema: UserPreferenceSchema }, // Use the string 'UserPreference' here
    ]),
  ],
  providers: [PreferencesService],
  controllers: [PreferencesController],
})
export class PreferencesModule {}
