import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { TopLevelCategory, TopPageModel } from './top-page.model';
import { Types } from 'mongoose';

@Injectable()
export class TopPageService {
  constructor(
    @InjectModel(TopPageModel.name)
    private readonly topPageModel: Model<TopPageModel>,
  ) {}

  async create(dto: CreateTopPageDto) {
    return this.topPageModel.create(dto);
  }

  async findById(id: string) {
    return this.topPageModel.findById(id).exec();
  }

  async findByAlias(alias: string) {
    return this.topPageModel.findOne({ alias }).exec();
  }

  async findByCategory(firstCategory: TopLevelCategory) {
    return this.topPageModel
      .find({ firstCategory }, { alias: 1, title: 1, secondCategory: 1 })
      .exec();
  }

  async deleteById(id: string): Promise<TopPageModel | null> {
    return this.topPageModel.findByIdAndDelete(id).exec();
  }

  async updateById(id: string | Types.ObjectId, dto: CreateTopPageDto) {
    return this.topPageModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }
}
