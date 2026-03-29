import { Module, forwardRef } from '@nestjs/common';
import { ExpensesService } from './services/expenses.service';
import { ExpensesController } from './controllers/expenses.controller';
import { CurrencyModule } from '../currency/currency.module';
import { ApprovalsModule } from '../approvals/approvals.module';

@Module({
  imports: [CurrencyModule, forwardRef(() => ApprovalsModule)],
  controllers: [ExpensesController],
  providers: [ExpensesService],
  exports: [ExpensesService],
})
export class ExpensesModule {}
