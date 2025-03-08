import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReviewDocument, ReviewModel } from './review.model';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel.name)
    private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(dto: CreateReviewDto): Promise<ReviewDocument> {
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<ReviewDocument | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(productId: string): Promise<ReviewDocument[]> {
    return this.reviewModel.find({ productId }).exec();
  }

  async deleteByProductId(productId: string) {
    return this.reviewModel.deleteMany({ productId }).exec();
  }
}
