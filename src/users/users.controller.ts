import { Body, Controller, Delete, Get, Param, Post, Put, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-users.dto';
import { AuthGuard } from './auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers(){
        return this.usersService.getAllUsers();
    }

    @Get('search')
    searchUsers(@Query('name') name: string, @Query('age') age: string): string {
        return `Searching users for: ${name}, Age: ${age}`;
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    getUserByID(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUserById(id);
    }

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.usersService.createUser(body);
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
