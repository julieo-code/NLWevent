import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624487363752 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { //cria tabela
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid", //ID único universal
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()", //Pega a hora que for criado o objeto.
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> { //remover tabela
        await queryRunner.dropTable("users")
    }

}
