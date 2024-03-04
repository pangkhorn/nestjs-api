import { V } from '@constants/index';
import * as regex from '@constants/regex.constant';
import { IsOptional, IsString, Matches } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  size = 25;

  @IsOptional()
  page = 1;

  @IsOptional()
  @IsString({ message: V.STRING })
  @Matches(regex._string, { message: V.REGEX })
  sort: string;

  @IsOptional()
  @IsString({ message: V.STRING })
  @Matches(regex._string, { message: V.REGEX })
  keyword: string;
}
