import { Controller, Get } from "@nestjs/common"
import { AppService } from "./app.service"
import { Transaction } from "./database/transactions.types"

@Controller("v1")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("transactions")
  getTransactions(): Transaction[] {
    return this.appService.getTransactions()
  }

  @Get("balances")
  getBalanceByUser(): Transaction[] {
    return this.appService.getBalanceByUser()
  }
}
