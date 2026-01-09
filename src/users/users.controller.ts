import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() users: UsersDto) {
    return this.usersService.create(users);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
