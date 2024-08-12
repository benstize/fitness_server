import {
    Column,
    CreatedAt,
    DataType,
    Default,
    DeletedAt,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';


export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

@Table({ tableName: 'users' })
export class User extends Model<User> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @Column(DataType.STRING)
    firstName: string;

    @Column(DataType.STRING)
    lastName: string;

    @Column(DataType.STRING)
    phone: string;

    @Column(DataType.STRING)
    email: string;

    @Column(DataType.STRING)
    password: string;

    @Column(DataType.ENUM('male', 'female'))
    gender: Gender;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;

    @DeletedAt
    declare deletedAt?: Date;
}

