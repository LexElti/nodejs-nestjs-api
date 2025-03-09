import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthDto } from 'src/auth/dto/auth.dto';

export const UserEmail = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<{ user: AuthDto }>();
    return request.user;
  },
);
