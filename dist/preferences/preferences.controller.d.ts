import { PreferencesService } from './preference.service';
import { CreatePreferenceDto } from 'src/dto/create-preference.dto';
export declare class PreferencesController {
    private readonly preferencesService;
    constructor(preferencesService: PreferencesService);
    createPreferences(createPreferenceDto: CreatePreferenceDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/user-preference.schema").UserPreferenceDocument> & import("../schemas/user-preference.schema").UserPreference & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getPreferences(userId: string): Promise<import("../schemas/user-preference.schema").UserPreferenceDocument>;
    updatePreferences(userId: string, createPreferenceDto: CreatePreferenceDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/user-preference.schema").UserPreferenceDocument> & import("../schemas/user-preference.schema").UserPreference & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deletePreferences(userId: string): Promise<import("mongodb").DeleteResult>;
}
