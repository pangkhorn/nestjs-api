import { CurrencyEnum } from '@constants/enum';
import { V } from '@constants/index';
import * as regex from '@constants/regex.constant';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { concatVKey } from '@utilities/validation.utility';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Matches, MaxLength } from 'class-validator';
import { PaginationDto } from './base.dto';

export class CreatedWalletDto {
  @ApiProperty({ required: false })
  @IsUUID('4', { message: V.UUID })
  userUuid: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: V.NOT_EMPTY })
  @IsString({ message: V.STRING })
  @MaxLength(50, { message: V.MAX.STRING })
  @Matches(regex._name, { message: (arg) => concatVKey(arg, V.REGEX) })
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: V.STRING })
  description: string;

  @ApiProperty({ enum: CurrencyEnum })
  @IsEnum(CurrencyEnum, { message: V.IN })
  currency: CurrencyEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  balance?: number = 0;
}

export class AddWalletHolder {
  @ApiProperty()
  @IsUUID('4', { message: V.UUID })
  userUuid: string;
}

export class UpdateWalletDto {
  @ApiProperty({ required: false })
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
