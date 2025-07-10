export class CreateUserDto {
  name: string;
  gender: string;
  role: 'admin' | 'user' | 'seller';
}
