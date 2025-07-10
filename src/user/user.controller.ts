import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @Get()
  findAll(@Query('role') role: 'admin' | 'user' | 'seller') {
    return this.usersService.findAll(role);
  }

  @Get('interns')
  findAllIntern() {
    return ['Interns'];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(
    @Body()
    user: {
      name: string;
      gender: string;
      role: 'admin' | 'seller' | 'user';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateData: {
      name?: string;
      gender?: string;
      role?: 'admin' | 'seller' | 'user';
    },
  ) {
    return this.usersService.update(+id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
