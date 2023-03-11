import { MigrationInterface, QueryRunner } from "typeorm";

export class AddKeyToTranslations1678571769294 implements MigrationInterface {
    name = 'AddKeyToTranslations1678571769294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`translations\` DROP FOREIGN KEY \`FK_3b868b38fa22dedfb286538fffa\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\` DROP FOREIGN KEY \`FK_668111c72ac5c9eb05db93b9420\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_e6ce8d90f8933362a62b24b86e\` ON \`translations\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\` CHANGE \`namespaceId\` \`namespaceId\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\` CHANGE \`languageId\` \`languageId\` int NOT NULL
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`IDX_e6ce8d90f8933362a62b24b86e\` ON \`translations\` (\`key\`, \`languageId\`, \`namespaceId\`)
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
            ALTER TABLE \`translations\` CHANGE \`languageId\` \`languageId\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\` CHANGE \`namespaceId\` \`namespaceId\` int NULL
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`IDX_e6ce8d90f8933362a62b24b86e\` ON \`translations\` (\`key\`, \`languageId\`, \`namespaceId\`)
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\`
            ADD CONSTRAINT \`FK_668111c72ac5c9eb05db93b9420\` FOREIGN KEY (\`languageId\`) REFERENCES \`language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\`
            ADD CONSTRAINT \`FK_3b868b38fa22dedfb286538fffa\` FOREIGN KEY (\`namespaceId\`) REFERENCES \`name_space\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
