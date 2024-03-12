import { ParseUUIDV4Pipe } from '@commons/pipe.common';
import { IWalletService, WALLET_SERVICE } from '@domains/service';
import { AddWalletHolder, CreatedWalletDto, ListWalletDto, UpdateWalletDto } from '@dtos/wallet.dto';
import { Body, Controller, Get, HttpCode, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { WalletListResponse } from '@shares/response/base.response';
import { IAuthUser } from '@shares/type/base.interface';
import { HttpStatusCode } from 'axios';
import { AuthenticatedUser } from 'nest-keycloak-connect';

@ApiBearerAuth()
@ApiTags('Wallets')
@Controller({ path: 'wallets' })
export class WalletController {
  constructor(@Inject(WALLET_SERVICE) private readonly walletService: IWalletService) {}

  @Get()
  @ApiOkResponse({ type: WalletListResponse })
  async listWallets(@Query() query: ListWalletDto, @AuthenticatedUser() user: IAuthUser) {
    return { wallets: await this.walletService.listWallets({ ...query, userUuid: user.userUuid }) };
  }

  @Get(':uuid')
  async getWallet(
    @Param('uuid', new ParseUUIDV4Pipe())
    uuid: string
  ) {
    const wallet = await this.walletService.getDetailWallet({ uuid });
    return { wallets: { wallet } };
  }

  @Put(':uuid')
  async updateWallets(
    @Param('uuid', new ParseUUIDV4Pipe())
    uuid: string,
    @Body() dto: UpdateWalletDto
  ) {
    const wallet = await this.walletService.updateWallet({ uuid, ...dto });
    return { wallets: { wallet } };
  }

  @Post()
  @HttpCode(HttpStatusCode.Created)
  async createWallet(@Body() createWallet: CreatedWalletDto, @AuthenticatedUser() user: IAuthUser) {
    const wallet = await this.walletService.createWallet({ ...createWallet, userUuid: user.userUuid });
    return { wallets: { wallet } };
  }

  @Post(':uuid/add-holder')
  async addHolder(
    @Param('uuid', new ParseUUIDV4Pipe())
    uuid: string,
    @Body() dto: AddWalletHolder,
    @AuthenticatedUser() user: IAuthUser
  ) {
    const wallet = await this.walletService.addWalletHolder({
      userUuid: dto.userUuid,
      walletUuid: uuid,
      ownerUuid: user.userUuid
    });
    return { wallets: { wallet } };
  }
}
