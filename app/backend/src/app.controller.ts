import { Controller, Get, Query } from "@nestjs/common"
import { AppService } from "./app.service"
import { Transaction, Balance } from "./database/transactions.types"

@Controller("v1")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("transactions")
  getTransactions(
    @Query("page") page,
    @Query("pageSize") pageSize
  ): Transaction[] {
    return this.appService.getTransactions(+page, +pageSize)
  }

  @Get("balances")
  getBalanceByUser(): Balance {
    return this.appService.getBalanceByUser()
  }
}
