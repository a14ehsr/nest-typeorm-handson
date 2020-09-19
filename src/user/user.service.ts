import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}
    sample(): Promise<Array<User>> {
        return this.repository.find();
    }
}
