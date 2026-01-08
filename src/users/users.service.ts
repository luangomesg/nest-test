import { Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { randomUUID } from 'crypto';
import { hashSync as bcryptHashSync } from 'bcrypt';
@Injectable()
export class UsersService {
  private readonly users: UsersDto[] = [];
  create(newUser: UsersDto) {
    newUser.id = randomUUID();
    newUser.password = bcryptHashSync(newUser.password, 10);
    this.users.push(newUser);
    console.log(this.users);
  }
}
