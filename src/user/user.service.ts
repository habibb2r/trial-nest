import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user-dto';
import { UpdateUserDto } from './DTO/update-user-dto';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Habib Ullah Sajib',
      gender: 'Male',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Era Yasmin',
      gender: 'Female',
      role: 'seller',
    },
    {
      id: 3,
      name: 'Tanvir Rahman',
      gender: 'Male',
      role: 'user',
    },
    {
      id: 4,
      name: 'Nusrat Alam',
      gender: 'Female',
      role: 'seller',
    },
    {
      id: 5,
      name: 'Samiul Islam',
      gender: 'Male',
      role: 'user',
    },
  ];

  findAll(role?: 'admin' | 'seller' | 'user') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log({ id, updateUserDto });
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removeUser;
  }
}
