import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createTableCompliments1625188490850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "user_sender",
                        type: "int",
                    },
                    {
                        name: "user_receiver",
                        type: "int",
                    },
                    {
                        name: "tag_id",
                        type: "int",
                    },
                    {
                        name: "message",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )

        await queryRunner.createForeignKeys(
            "compliments",
            [
                new TableForeignKey({
                    name: "fk_user_sender_compliments",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_sender"]
                }),
                new TableForeignKey({
                    name: "fk_user_receiver_compliments",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_receiver"]
                }),
                new TableForeignKey({
                    name: "fk_tag_compliments",
                    referencedTableName: "tags",
                    referencedColumnNames: ["id"],
                    columnNames: ["tag_id"]
                })
            ]
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
