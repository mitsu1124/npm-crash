import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
	constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
	// private readonly items: Item[] = [
	// 	{
	// 		//hard coded items
	// 		id: '3434343545',
	// 		name: 'Item One',
	// 		qty: 100,
	// 		decsription: 'This is item one'
	// 	},
	// 	{
	// 		id: '98495485',
	// 		name: 'Item Two',
	// 		qty: 50,
	// 		decsription: 'This is item two'
	// 	}
	// ];
	async findAll(): Promise<Item[]> {
		return await this.itemModel.find();
	}
	// findAll(): Item[] {
	// 	return this.items;
	// }

	async findOne(id: string): Promise<Item> {
		return await this.itemModel.findOne({ _id: id });
	}

	// findOne(id: string): Item {
	// 	return this.items.find((item) => item.id === id);
	// }

	async create(item: Item): Promise<Item> {
		const newItem = new this.itemModel(item);
		return await newItem.save();
	}

	async delete(id: string): Promise<Item> {
		return await this.itemModel.findByIdAndRemove(id);
	}

	async update(id: string, item: Item): Promise<Item> {
		return await this.itemModel.findByIdAndUpdate(id, item, { new: true }); //option if there no one, create one
	}
}
