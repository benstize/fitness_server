import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/users/entities/user.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.get<string>('db.host'),
        port: configService.get<number>('db.port'),
        username: configService.get<string>('db.username'),
        password: configService.get<string>('db.password'),
        database: configService.get<string>('db.name'),
      });
      sequelize.addModels([
        User
      ]);
      return sequelize;
    },
    inject: [ConfigService],
  },
];
