import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { TransactionsRepo } from "./database/transactions.repo"

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TransactionsRepo],
})
export class AppModule {}
