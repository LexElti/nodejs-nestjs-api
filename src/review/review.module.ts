import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewController } from './review.controller';
import { ReviewSchema, ReviewModel } from './review.model';
import { ReviewService } from './review.service';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([
      {
        name: ReviewModel.name,
        schema: ReviewSchema,
      },
    ]),
    TelegramModule,
  ],
  providers: [ReviewService],
})
export class ReviewModule {}
