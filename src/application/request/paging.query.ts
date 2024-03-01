import { V } from '@constants';
import { IsOptional, IsString } from 'class-validator';

export abstract class PaginateRequest {
  @IsOptional()
  size = 25;

  @IsOptional()
  page = 1;

  @IsOptional()
  @IsString({ message: V.STRING })
  sort: string;

  @IsOptional()
  @IsString({ message: V.STRING })
  fields = '*';

  @IsOptional()
  @IsString({ message: V.STRING })
  keyword: string;
}
