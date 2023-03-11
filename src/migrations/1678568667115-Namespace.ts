import { MigrationInterface, QueryRunner } from "typeorm";

export class Namespace1678568667115 implements MigrationInterface {
    name = 'Namespace1678568667115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX \`name\` ON \`language\`
        `);
        await queryRunner.query(`
            CREATE TABLE \`name_space\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`name\` varchar(255) NOT NULL,
                \`languageId\` int NULL,
                UNIQUE INDEX \`IDX_c43106713de3d201624ebe865b\` (\`name\`, \`languageId\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`language\`
            ADD UNIQUE INDEX \`IDX_7df7d1e250ea2a416f078a631f\` (\`name\`)
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
            ALTER TABLE \`language\` DROP INDEX \`IDX_7df7d1e250ea2a416f078a631f\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_c43106713de3d201624ebe865b\` ON \`name_space\`
        `);
        await queryRunner.query(`
            DROP TABLE \`name_space\`
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`name\` ON \`language\` (\`name\`)
        `);
    }

}
