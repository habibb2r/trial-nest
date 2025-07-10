import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAll() {
    return [];
  }

  @Get('interns')
  findAllIntern() {
    return ['Interns'];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: object) {
    return { id: id, ...updateData };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
