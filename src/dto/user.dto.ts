import {
  IsString,
  IsInt,
  IsEmail,
  Min,
  Max,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  id: number;

  name: string;

  @IsInt()
  @Min(0)
  @Max(10)
  age: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;

  @IsEmail()
  email: string;

  isActive: boolean;
}
