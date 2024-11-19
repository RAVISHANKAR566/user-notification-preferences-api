import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UserPreference,
  UserPreferenceDocument,
} from '../schemas/user-preference.schema';
import { CreatePreferenceDto } from 'src/dto/create-preference.dto';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(UserPreference.name)
    private userPreferenceModel: Model<UserPreferenceDocument>,
  ) {}

  /**
   * Create or update user preferences.
   * @param userId - User ID.
   * @param preferencesDto - Preferences data transfer object.
   * @returns The created or updated preferences document.
   */
  async createOrUpdate(userId: string, preferencesDto: CreatePreferenceDto) {
    const existingPreference = await this.userPreferenceModel.findOne({
      userId,
    });

    if (existingPreference) {
      // Update existing preferences
      existingPreference.preferences = preferencesDto.preferences;
      existingPreference.timezone = preferencesDto.timezone;
      existingPreference.lastUpdated = new Date();
      return existingPreference.save();
    } else {
      // Create new preferences
      const newPreferences = new this.userPreferenceModel({
        ...preferencesDto,
      });
      return newPreferences.save();
    }
  }

  /**
   * Get user preferences by userId.
   * @param userId - User ID.
   * @returns The user's preferences or null if not found.
   */
  async getPreferences(userId: string): Promise<UserPreferenceDocument | null> {
    return this.userPreferenceModel.findOne({ userId });
  }

  /**
   * Delete user preferences by userId.
   * @param userId - User ID.
   * @returns Deletion result.
   */
  async deletePreferences(userId: string) {
    return this.userPreferenceModel.deleteOne({ userId });
  }
}
