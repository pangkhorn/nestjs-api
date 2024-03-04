import { IUserService, USER_SERVICE } from '@domains/service';
import { ListUserDto } from '@dtos/user.dto';
import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller({ path: 'users' })
export class UserController {
  constructor(@Inject(USER_SERVICE) private readonly userService: IUserService) {}
  @Get()
  async users(@Query() query: ListUserDto) {
    return { users: await this.userService.getListUsers(query) };
  }
}
