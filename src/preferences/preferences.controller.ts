import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PreferencesService } from './preference.service';
import { CreatePreferenceDto } from 'src/dto/create-preference.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'; // Import Swagger decorators

@ApiTags('preferences') // Add this to group all preference-related routes under a 'preferences' tag
@Controller('api/preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  @ApiOperation({ summary: 'Create user preferences' }) // Summarize what this route does
  @ApiResponse({
    status: 201,
    description: 'User preferences created successfully.',
  }) // Document success response
  @ApiResponse({ status: 400, description: 'Invalid input data.' }) // Document error response
  async createPreferences(@Body() createPreferenceDto: CreatePreferenceDto) {
    return this.preferencesService.createOrUpdate(
      createPreferenceDto.userId,
      createPreferenceDto,
    );
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user preferences' })
  @ApiResponse({
    status: 200,
    description: 'User preferences retrieved successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Preferences not found for the given user ID.',
  })
  async getPreferences(@Param('userId') userId: string) {
    return this.preferencesService.getPreferences(userId);
  }

  @Patch(':userId')
  @ApiOperation({ summary: 'Update user preferences' })
  @ApiResponse({
    status: 200,
    description: 'User preferences updated successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Preferences not found for the given user ID.',
  })
  async updatePreferences(
    @Param('userId') userId: string,
    @Body() createPreferenceDto: CreatePreferenceDto,
  ) {
    return this.preferencesService.createOrUpdate(userId, createPreferenceDto);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete user preferences' })
  @ApiResponse({
    status: 200,
    description: 'User preferences deleted successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Preferences not found for the given user ID.',
  })
  async deletePreferences(@Param('userId') userId: string) {
    return this.preferencesService.deletePreferences(userId);
  }
}
