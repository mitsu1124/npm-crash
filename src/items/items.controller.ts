import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
// import { Controller, Get, Post, Put, Delete, Body, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
// import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
	constructor(private readonly itemsService: ItemsService) {}
	@Get() // findAll(@Req() req: Request, @Res() res: Response): Response {
	findAll(): Promise<Item[]> {
		// findAll(): Item[] {
		// findAll(): string {
		return this.itemsService.findAll();
		// console.log(req.url);
		// return res.send('Hello World');
		// findAll(): number{
		// return 'Get all items';
		// return 1;
	}

	@Get(':id')
	findOne(@Param('id') id): Promise<Item> {
		// findOne(@Param('id') id): Item {
		// findOne(@Param('id') id) {
		return this.itemsService.findOne(id);
		// return `Item ${id}`;
		// findOne(@Param() param) {
		// 	return `Item ${param.id}`;
	}

	@Post()
	create(@Body() createItemDto: CreateItemDto): Promise<Item> {
		return this.itemsService.create(createItemDto);
	}
	// create(@Body() createItemDto: CreateItemDto): string {
	// 	// return 'Create item';
	// 	return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
	// }

	@Delete(':id')
	delete(@Param('id') id): Promise<Item> {
		return this.itemsService.delete(id);
	}
	// @Delete(':id')
	// delete(@Param('id') id): string {
	// 	return `Delete ${id}`;
	// }

	@Put(':id')
	update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
		return this.itemsService.update(id, updateItemDto);
	}

	// @Put(':id')
	// update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
	// 	return `Update ${id} - Name: ${updateItemDto.name}`;
	// }
}

// app.get('/', (req, res))
