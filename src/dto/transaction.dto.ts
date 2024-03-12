import { TransactionTypeEnum } from '@constants/enum';
import { V } from '@constants/index';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator';
import { PaginationDto } from './base.dto';

export class CreatedTransactionDto {
  @ApiProperty()
  @IsUUID('4', { message: V.UUID })
  walletUuid: string;

  @ApiProperty({ required: true })
  @IsPositive({ message: V.POSITIVE })
  @IsNumber({}, { message: V.NUMERIC })
  amount: number;

  @ApiProperty({ enum: TransactionTypeEnum })
  @IsEnum(TransactionTypeEnum, { message: V.IN })
  type: TransactionTypeEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: V.STRING })
  remark: string;
}

export class ListTransactionDto extends PaginationDto {
  @ApiProperty({ required: false, name: 'walletUuid', type: 'string' })
  @IsOptional()
  @IsUUID('4', { message: V.UUID })
  walletUuid?: string;
}
