import { IUserService, USER_SERVICE } from '@domains/service';
import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { IAuthUser } from '@shares/type/base.interface';

@Injectable()
export class AuthSyncGuard implements CanActivate {
  constructor(@Inject(USER_SERVICE) private readonly userService: IUserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: IAuthUser = request.user;
    if (user?.sub) {
      const userSync = await this.userService.syncAuthenticated(user);
      request.user.userId = userSync.id;
      request.user.userUuid = userSync.uuid;
    }
    return true;
  }
}
