import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  gender: string;

  @IsEnum(['admin', 'user', 'seller'], {
    message: 'Valid Role Required',
  })
  role: 'admin' | 'user' | 'seller';
}
