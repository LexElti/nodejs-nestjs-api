import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewController } from './review.controller';
import { ReviewSchema, ReviewModel } from './review.model';

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([
      {
        name: ReviewModel.name,
        schema: ReviewSchema,
      },
    ]),
  ],
})
export class ReviewModule {}
