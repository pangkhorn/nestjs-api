import { CurrencyEnum } from '@constants/enum';
import { V } from '@constants/index';
import * as regex from '@constants/regex.constant';
import { concatVKey } from '@utilities/validation.utility';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Matches, MaxLength } from 'class-validator';
import { PaginationDto } from './base.dto';

export class CreatedWalletDto {
  @IsUUID('4', { message: V.UUID })
  userUuid: string;

  @IsNotEmpty({ message: V.NOT_EMPTY })
  @IsString({ message: V.STRING })
  @MaxLength(50, { message: V.MAX.STRING })
  @Matches(regex._name, { message: (arg) => concatVKey(arg, V.REGEX) })
  name: string;

  @IsOptional()
  @IsString({ message: V.STRING })
  description: string;

  @IsEnum(CurrencyEnum, { message: V.IN })
  currency: CurrencyEnum;

  @IsOptional()
  @IsNumber()
  balance?: number = 0;
}

export class UpdateWalletDto {
  @IsOptional()
  @IsNotEmpty({ message: V.NOT_EMPTY })
  @IsString({ message: V.STRING })
  @MaxLength(50, { message: V.MAX.STRING })
  @Matches(regex._name, { message: (arg) => concatVKey(arg, V.REGEX) })
  name?: string;

  @IsOptional()
  @IsString({ message: V.STRING })
  description?: string;
}

export class ListWalletDto extends PaginationDto {
  @IsOptional()
  @IsUUID('4', { message: V.UUID })
  user?: string;
}
