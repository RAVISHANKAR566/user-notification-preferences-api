import { Test, TestingModule } from '@nestjs/testing';
import { PreferencesService } from './preference.service';
import { getModelToken } from '@nestjs/mongoose';
import { UserPreference } from '../schemas/user-preference.schema';
import { Model } from 'mongoose';
import { CreatePreferenceDto } from 'src/dto/create-preference.dto';

describe('PreferencesService', () => {
  let service: PreferencesService;
  let model: Model<UserPreference>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PreferencesService,
        {
          provide: getModelToken(UserPreference.name),
          useValue: {
            findOne: jest.fn(),
            save: jest.fn(),
            deleteOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PreferencesService>(PreferencesService);
    model = module.get<Model<UserPreference>>(
      getModelToken(UserPreference.name),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createOrUpdate', () => {
    it('should create new preferences if none exist', async () => {
      const preferencesDto: CreatePreferenceDto = {
        userId: 'user123',
        email: 'user@example.com',
        timezone: 'UTC',
        preferences: {
          // Correct structure for preferences field
          marketing: true,
          newsletter: false,
          updates: true,
          frequency: 'weekly',
          channels: { email: true, sms: false, push: true },
        },
      };

      // Simulate no existing record
      jest.spyOn(model, 'findOne').mockResolvedValueOnce(null);

      // Mock save method to return preferencesDto
      const saveMock = jest.fn().mockResolvedValueOnce(preferencesDto);
      model.prototype.save = saveMock; // Mock instance's save method

      const result = await service.createOrUpdate(
        preferencesDto.userId,
        preferencesDto,
      );
      expect(result).toEqual(preferencesDto);
      expect(saveMock).toHaveBeenCalled();
    });

    it('should update existing preferences', async () => {
      const preferencesDto: CreatePreferenceDto = {
        userId: 'user123',
        email: 'user@example.com',
        timezone: 'UTC',
        preferences: {
          // Correct structure for preferences field
          marketing: false,
          newsletter: true,
          updates: true,
          frequency: 'weekly',
          channels: { email: true, sms: true, push: false },
        },
      };

      const existingPreference = {
        userId: 'user123',
        preferences: {
          marketing: true,
          newsletter: false,
          updates: true,
          frequency: 'weekly',
          channels: { email: true, sms: false, push: true },
        },
        timezone: 'UTC',
        lastUpdated: new Date(),
      };

      // Simulate an existing preference
      const mockExistingDoc = {
        ...existingPreference,
        save: jest
          .fn()
          .mockResolvedValueOnce({ ...existingPreference, ...preferencesDto }),
      };

      jest
        .spyOn(model, 'findOne')
        .mockResolvedValueOnce(mockExistingDoc as any);

      const result = await service.createOrUpdate(
        preferencesDto.userId,
        preferencesDto,
      );
      expect(result).toEqual({ ...existingPreference, ...preferencesDto });
      expect(mockExistingDoc.save).toHaveBeenCalled();
    });
  });

  describe('getPreferences', () => {
    it('should return user preferences if they exist', async () => {
      const userId = 'user123';
      const userPreferences = {
        userId,
        email: 'user@example.com',
        preferences: {
          marketing: true,
          newsletter: false,
          updates: true,
          frequency: 'weekly',
          channels: { email: true, sms: false, push: true },
        },
      };

      jest
        .spyOn(model, 'findOne')
        .mockResolvedValueOnce(userPreferences as any);

      const result = await service.getPreferences(userId);
      expect(result).toEqual(userPreferences);
    });

    it('should return null if preferences do not exist', async () => {
      const userId = 'user123';
      jest.spyOn(model, 'findOne').mockResolvedValueOnce(null);

      const result = await service.getPreferences(userId);
      expect(result).toBeNull();
    });
  });

  describe('deletePreferences', () => {
    it('should delete user preferences', async () => {
      const userId = 'user123';

      // Mock deleteOne method to return a valid DeleteResult
      const mockDeleteResult = {
        acknowledged: true, // This field is required in DeleteResult
        deletedCount: 1,
      };

      jest.spyOn(model, 'deleteOne').mockResolvedValueOnce(mockDeleteResult);

      const result = await service.deletePreferences(userId);
      expect(result).toEqual(mockDeleteResult);
    });

    it('should return no result if preferences do not exist', async () => {
      const userId = 'user123';

      // Mock deleteOne method to return a valid DeleteResult for no deleted items
      const mockDeleteResult = {
        acknowledged: true, // This field is required in DeleteResult
        deletedCount: 0,
      };

      jest.spyOn(model, 'deleteOne').mockResolvedValueOnce(mockDeleteResult);

      const result = await service.deletePreferences(userId);
      expect(result).toEqual(mockDeleteResult);
    });
  });
});
