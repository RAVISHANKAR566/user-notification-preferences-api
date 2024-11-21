import { Model } from 'mongoose';
import { UserPreference, UserPreferenceDocument } from '../schemas/user-preference.schema';
import { CreatePreferenceDto } from 'src/dto/create-preference.dto';
export declare class PreferencesService {
    private userPreferenceModel;
    constructor(userPreferenceModel: Model<UserPreferenceDocument>);
    createOrUpdate(userId: string, preferencesDto: CreatePreferenceDto): Promise<import("mongoose").Document<unknown, {}, UserPreferenceDocument> & UserPreference & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getPreferences(userId: string): Promise<UserPreferenceDocument | null>;
    deletePreferences(userId: string): Promise<import("mongodb").DeleteResult>;
}
