import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers(): {id: number, name: string, age: number}[] {
        return this.usersService.getAllUsers();
    }

    @Get('search')
    searchUsers(@Query('name') name: string, @Query('age') age: string): string {
        return `Searching users for: ${name}, Age: ${age}`;
    }

    @Get(':id')
    getUserByID(@Param('id') id: string): {id: number, name: string, age: number} {
        return this.usersService.getUserById(Number(id));
    }

    @Post()
    create(@Body() body: any) {
        return this.usersService.createUser(body.name, body.age);
    }

    /*@Put(':id')
    update(@Param('id') id: string, @Body() body: any) {
        if(!body.name) {
            throw new NotFoundException('Name is a required field');
        }
        return {message: `User with ID ${id} updated successfully`, data: body};
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return {message: `User with ID ${id} deleted successfully`};
    }*/


}
