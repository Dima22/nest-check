import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [{
        id: 1,
        name: 'Dima',
        age: 25
    }, {
        id: 2,
        name: 'Sergey',
        age: 30
    }, {
        id: 3,
        name: 'Oleg',
        age: 35
    }];

    getAllUsers(): {id: number, name: string, age: number}[] {
        return this.users;
    }

    getUserById(id: number): {id: number, name: string, age: number} {
        const user = this.users.find(user => user.id === id);
        if(!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    createUser(name: string, age: number): {id: number, name: string, age: number} {
        const newUser = {
            id: this.users.length + 1,
            name,
            age
        };
        this.users.push(newUser);
        return newUser;
    }
}
