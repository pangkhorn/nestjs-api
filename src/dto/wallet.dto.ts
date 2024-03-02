import { CurrencyEnum } from '@constants/enum';
import { V } from '@constants/index';
import * as regex from '@constants/regex.constant';
import { concatVKey } from '@utilities/validation.utility';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxLength } from 'class-validator';

export class CreatedWalletDto {
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

export class ListWalletDto {
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
