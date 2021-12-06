import { Module, DynamicModule } from '@nestjs/common';
import { Database } from './database';

@Module({
  providers: [Database]
})
export class DatabaseModule {
  static forRoot(entities = [], options?): DynamicModule {
    const providers = createdatabaseProviders(options, entities)
    return {
      module: DatabaseModule,
      providers: providers,
      exports: providers
    }
  }
}
