import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './create-users.dto';
import {InjectRepository} from "@nestjs/typeorm";
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    /*private users = [{
        id: 1,
        name: 'Dima',
        age: 25,
        bio: 'Software developer with 5 years of experience in web development. Passionate about creating efficient and scalable applications.'
    }, {
        id: 2,
        name: 'Sergey',
        age: 30,
        bio: 'Senior software engineer with expertise in backend development and cloud architecture.'
    }, {
        id: 3,
        name: 'Oleg',
        age: 35,
        bio: 'Experienced software architect with a strong background in system design and scalability.'
    }];*/

    getAllUsers() {
        return this.userRepository.find();
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOneBy({ id });
        if(!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    createUser(body: CreateUserDto) {
        const newUser = this.userRepository.create({
            name: body.name,
            bio: body.bio
        });
        return this.userRepository.save(newUser);
    }
}