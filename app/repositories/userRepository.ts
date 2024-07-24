import { UserModel } from "../models/userModels";

export class UserRepository {
    async getUserById(id: number) {
        return await UserModel.query().where("id", id).first();
    }
    async getUserByEmail(email: string) {
        return await UserModel.query().where("email", email).first();
    }
    async createAdmin(userData: Partial<UserModel>) {
        return await UserModel.query().insert(userData);
    }
    async createMember(userData: Partial<UserModel>) {
        return await UserModel.query().insert(userData);
    }
}
