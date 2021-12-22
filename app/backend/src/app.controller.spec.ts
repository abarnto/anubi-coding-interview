import { Test, TestingModule } from "@nestjs/testing"
import { AppController } from "./app.controller"
import { getTransactions } from "./app.data"
import { AppService } from "./app.service"
import { TransactionsRepo } from "./database/transactions.repo"

describe("AppController", () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, TransactionsRepo],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  it("should return all transactions", () => {
    expect(appController.getTransactions()).toStrictEqual(getTransactions())
  })

  it("should return all transactions", () => {
    expect(appController.getBalanceByUser()).toStrictEqual({})
  })
})
