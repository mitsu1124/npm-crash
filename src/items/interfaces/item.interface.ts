import { Document } from 'mongoose';

export interface Item extends Document {
	id?: string; //? means optional
	name: string;
	decsription?: string;
	qty: number;
}
