import {
  Body,
  Controller,
  Get,
  UseGuards,
  Post,
  Req,
  Delete,
  Param,
} from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { JwtAuthGuard } from 'src/jwt-auth.guard';
import { CreatedFeedDto } from './dto/create-feed.dto';

@UseGuards(JwtAuthGuard)
@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Get()
  getFeeds() {
    return this.feedsService.getFeedWithUsers();
  }

  @Post()
  createdFeed(
    @Body() feed: CreatedFeedDto,
    @Req() request: Request & { user: { id: number } },
  ) {
    const userId = request.user.id;
    return this.feedsService.createFeed({ ...feed }, userId);
  }

  @Delete(':id')
  deleteFeed(@Param('id') id: number) {
    return this.feedsService.deleteFeed(id);
  }
}
