import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/create-user-dto';
import { UpdateUserDto } from './DTO/update-user-dto';

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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
