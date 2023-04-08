import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1680958390497 implements MigrationInterface {
    name = 'Initial1680958390497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`language_version\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`version\` bigint NOT NULL,
                \`languageId\` int NOT NULL,
                UNIQUE INDEX \`REL_cb0a05d3fca0a698ee16ac06df\` (\`languageId\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`translations\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`key\` varchar(255) NOT NULL,
                \`value\` text NOT NULL,
                \`namespaceId\` int NOT NULL,
                \`languageId\` int NOT NULL,
                \`approved\` tinyint NOT NULL DEFAULT 1,
                FULLTEXT INDEX \`IDX_78ed43861ae70853b8e484c176\` (\`value\`),
                UNIQUE INDEX \`IDX_e6ce8d90f8933362a62b24b86e\` (\`key\`, \`languageId\`, \`namespaceId\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`name_space\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`name\` varchar(255) NOT NULL,
                \`languageId\` int NOT NULL,
                \`isCompleted\` tinyint NOT NULL DEFAULT 0,
                UNIQUE INDEX \`IDX_c43106713de3d201624ebe865b\` (\`name\`, \`languageId\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`language\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`code\` varchar(255) NOT NULL,
                \`isDisabled\` tinyint NOT NULL DEFAULT 0,
                \`country\` varchar(255) NOT NULL,
                UNIQUE INDEX \`IDX_465b3173cdddf0ac2d3fe73a33\` (\`code\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`language_version\`
            ADD CONSTRAINT \`FK_cb0a05d3fca0a698ee16ac06df4\` FOREIGN KEY (\`languageId\`) REFERENCES \`language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\`
            ADD CONSTRAINT \`FK_3b868b38fa22dedfb286538fffa\` FOREIGN KEY (\`namespaceId\`) REFERENCES \`name_space\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\`
            ADD CONSTRAINT \`FK_668111c72ac5c9eb05db93b9420\` FOREIGN KEY (\`languageId\`) REFERENCES \`language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`name_space\`
            ADD CONSTRAINT \`FK_1155b29c6c41fdb1e13f8109d1f\` FOREIGN KEY (\`languageId\`) REFERENCES \`language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`name_space\` DROP FOREIGN KEY \`FK_1155b29c6c41fdb1e13f8109d1f\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\` DROP FOREIGN KEY \`FK_668111c72ac5c9eb05db93b9420\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\` DROP FOREIGN KEY \`FK_3b868b38fa22dedfb286538fffa\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`language_version\` DROP FOREIGN KEY \`FK_cb0a05d3fca0a698ee16ac06df4\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_465b3173cdddf0ac2d3fe73a33\` ON \`language\`
        `);
        await queryRunner.query(`
            DROP TABLE \`language\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_c43106713de3d201624ebe865b\` ON \`name_space\`
        `);
        await queryRunner.query(`
            DROP TABLE \`name_space\`
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
        await queryRunner.query(`
            DROP INDEX \`REL_cb0a05d3fca0a698ee16ac06df\` ON \`language_version\`
        `);
        await queryRunner.query(`
            DROP TABLE \`language_version\`
        `);
    }

}
