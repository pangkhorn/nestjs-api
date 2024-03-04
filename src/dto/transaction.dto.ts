import { TransactionTypeEnum } from '@constants/enum';
import { V } from '@constants/index';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreatedTransactionDto {
  @ApiProperty({ required: false })
  @IsUUID('4', { message: V.UUID })
  userUuid: string;

  @ApiProperty({ required: false })
  @IsUUID('4', { message: V.UUID })
  walletUuid: string;

  @ApiProperty({ required: true })
  @IsPositive()
  @IsNumber()
  amount: number;

  @ApiProperty({ enum: TransactionTypeEnum })
  @IsEnum(TransactionTypeEnum, { message: V.IN })
  type: TransactionTypeEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: V.STRING })
  remark: string;
}
