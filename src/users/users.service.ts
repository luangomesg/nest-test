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
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findByUsername(username: string): UsersDto | undefined {
    return this.users.find((user) => user.username === username);
  }
}
