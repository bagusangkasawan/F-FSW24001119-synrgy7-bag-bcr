import { Model, ModelObject } from "objection";

export class CarModel extends Model {
    id!: number;
    name!: string;
    harga!: number;
    foto!: string;
    start_rent!: Date;
    finish_rent!: Date;
    created_at!: Date;
    updated_at!: Date;

    static get tableName() {
        return "cars";
    }
}
export type Cars = ModelObject<CarModel>;
