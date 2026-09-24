import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './create-users.dto';

@Injectable()
export class UsersService {
    private users = [{
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
    }];

    getAllUsers(): {id: number, name: string, age: number, bio: string}[] {
        return this.users;
    }

    getUserById(id: number): {id: number, name: string, age: number, bio: string} {
        const user = this.users.find(user => user.id === id);
        if(!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    createUser(body: CreateUserDto): {id: number, name: string, age: number, bio: string} {
        const newUser = {
            id: this.users.length + 1,
            name: body.name,
            age: body.age,
            bio: body.bio   
        };
        this.users.push(newUser);
        return newUser;
    }
}
