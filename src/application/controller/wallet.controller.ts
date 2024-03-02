import { IWalletService, WALLET_SERVICE } from '@domains/service';
import { CreatedWalletDto, ListWalletDto } from '@dtos/wallet.dto';
import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';

@Controller({ path: 'wallets', version: '1' })
export class WalletController {
  constructor(@Inject(WALLET_SERVICE) private readonly walletService: IWalletService) {}

  @Get()
  async listWallets(@Query() query: ListWalletDto) {
    return { wallets: await this.walletService.listWallets(query) };
  }
  @Post()
  async createWallet(@Body() createWallet: CreatedWalletDto) {
    const wallet = await this.walletService.createdWallet(createWallet);
    return { wallets: { wallet } };
  }
}
