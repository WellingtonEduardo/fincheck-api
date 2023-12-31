import { Global, Module } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { PrismaService } from './prisma.service';
import { CategoriesRepository } from './repositories/categories.repository';
import { BankAccountsRepository } from './repositories/bank-accounts.repository';
import { TransactionsRepository } from './repositories/transactions.repository';

@Global()
@Module({
  providers: [
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
    PrismaService,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
