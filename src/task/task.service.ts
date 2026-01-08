import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];
  create(task: TaskDto) {
    this.tasks.push(task);
    return task;
  }

  findById(id: string): TaskDto | undefined {
    const foundTask = this.tasks.filter((task) => task.id === id);

    if (foundTask.length) {
      return foundTask[0];
    }

    throw new NotFoundException(`Task with ${id} not found`);
  }

  findAll(): TaskDto[] {
    return this.tasks;
  }

  update(id: string, task: TaskDto) {
    const foundTask = this.tasks
      .filter((task) => task.id === id)
      .findIndex((t) => t.id === id);

    if (foundTask >= 0) {
      this.tasks[foundTask] = task;
      return 'Task updated successfully';
    }

    throw new HttpException(
      `Task with id ${task.id} not found`,
      HttpStatus.BAD_REQUEST,
    );
  }

  delete(id: string) {
    const foundTask = this.tasks.findIndex((task) => task.id === id);

    if (foundTask >= 0) {
      this.tasks.splice(foundTask, 1);
      return 'Task deleted successfully';
    }

    throw new NotFoundException(`Task with id ${id} not found`);
  }
}
