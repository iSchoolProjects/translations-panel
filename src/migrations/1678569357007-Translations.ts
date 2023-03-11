import { MigrationInterface, QueryRunner } from "typeorm";

export class Translations1678569357007 implements MigrationInterface {
    name = 'Translations1678569357007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`translations\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`key\` varchar(255) NOT NULL,
                \`value\` text NOT NULL,
                \`approved\` tinyint NOT NULL DEFAULT 1,
                \`namespaceId\` int NULL,
                \`languageId\` int NULL,
                FULLTEXT INDEX \`IDX_78ed43861ae70853b8e484c176\` (\`value\`),
                UNIQUE INDEX \`IDX_e6ce8d90f8933362a62b24b86e\` (\`key\`, \`languageId\`, \`namespaceId\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\`
            ADD CONSTRAINT \`FK_3b868b38fa22dedfb286538fffa\` FOREIGN KEY (\`namespaceId\`) REFERENCES \`name_space\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\`
            ADD CONSTRAINT \`FK_668111c72ac5c9eb05db93b9420\` FOREIGN KEY (\`languageId\`) REFERENCES \`language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`translations\` DROP FOREIGN KEY \`FK_668111c72ac5c9eb05db93b9420\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\` DROP FOREIGN KEY \`FK_3b868b38fa22dedfb286538fffa\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_e6ce8d90f8933362a62b24b86e\` ON \`translations\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_78ed43861ae70853b8e484c176\` ON \`translations\`
        `);
        await queryRunner.query(`
            DROP TABLE \`translations\`
        `);
    }

}
