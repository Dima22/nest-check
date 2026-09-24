import { IsString, IsNumber, MinLength, Min } from 'class-validator';

export class CreateUserDto {
    @IsString({message: 'Name must be a string'})
    @MinLength(3, {message: 'Name must be at least 3 characters long'})
    name!: string;

    @IsNumber({},{message: 'Age must be a number'} )
    @Min(14, {message: 'Age must be at least 14'})
    age!: number;
    
    @IsString({message: 'Bio must be a string'})
    @MinLength(10, {message: 'Bio must be at least 10 characters long'})
    bio!: string;
}