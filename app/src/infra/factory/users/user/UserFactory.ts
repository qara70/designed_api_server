import User from "domain/entity/users/user/index";
import UserFactoryInterface from "domain/factory/users/UserFactoryInterface";
import UserDto from "app/dto/UserDto";

export default class UserFactory implements UserFactoryInterface {
    /// リポジトリから受け取った集約を最適化した集約に再構成する
    public createUserEntity(aggregation: any): object {
        if (aggregation.hasOwnProperty('pair')) {
            delete aggregation.pair;
        } else {
            throw new Error(`Not Found Pair property : user_id(${aggregation.id})`);
        }
        return aggregation;
    }

    public async createUserAll(userEntities: User[]): Promise<UserDto[]> {
        const users = await userEntities.map(
            (userEntity): UserDto => {
                return new UserDto(userEntity);
            }
        )
        return users;
    }
}