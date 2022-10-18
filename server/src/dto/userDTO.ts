import { IsString, IsEmail } from 'class-validator';

export class UserDTO {
  @IsEmail() readonly email: string;
  @IsString() readonly name: string;
  @IsString() readonly password: string;
}
