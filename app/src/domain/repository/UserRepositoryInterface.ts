import Team from 'domain/entity/users/team';
import Pair from 'domain/entity/users/pair';
import User from 'domain/entity/users/user';

export default interface UserRepositoryInterface {
    findByUserId(id: number): Promise<User>;
    findByPairId(id: number): Promise<User>;
    findByBelongId(id: number): Promise<User>;
    findByTeamId(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    create(data: object): Promise<void>;
    update(user: User): Promise<void>;
    delete(id: number): Promise<void>;
}