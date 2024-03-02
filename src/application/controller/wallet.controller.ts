import { ParseUUIDV4Pipe } from '@commons/pipe.common';
import { IWalletService, WALLET_SERVICE } from '@domains/service';
import { CreatedWalletDto, ListWalletDto, UpdateWalletDto } from '@dtos/wallet.dto';
import { Body, Controller, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';

@Controller({ path: 'wallets', version: '1' })
export class WalletController {
  constructor(@Inject(WALLET_SERVICE) private readonly walletService: IWalletService) {}

  @Get()
  async listWallets(@Query() query: ListWalletDto) {
    return { wallets: await this.walletService.listWallets(query) };
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
  async createWallet(@Body() createWallet: CreatedWalletDto) {
    const wallet = await this.walletService.createWallet(createWallet);
    return { wallets: { wallet } };
  }
}
