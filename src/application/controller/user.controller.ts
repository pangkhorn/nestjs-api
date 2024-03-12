import { IUserService, USER_SERVICE } from '@domains/service';
import { ListUserDto } from '@dtos/user.dto';
import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IAuthUser } from '@shares/type/base.interface';
import { AuthenticatedUser } from 'nest-keycloak-connect';

@ApiBearerAuth()
@ApiTags('Users')
@Controller({ path: 'users' })
export class UserController {
  constructor(@Inject(USER_SERVICE) private readonly userService: IUserService) {}
  @Get()
  async users(@Query() query: ListUserDto, @AuthenticatedUser() user: IAuthUser) {
    return { users: await this.userService.getListUsers({ ...query, user }) };
  }
}
