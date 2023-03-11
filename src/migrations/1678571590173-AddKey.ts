import { MigrationInterface, QueryRunner } from "typeorm";

export class AddKey1678571590173 implements MigrationInterface {
    name = 'AddKey1678571590173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX \`IDX_cb0a05d3fca0a698ee16ac06df\` ON \`language_version\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`name_space\` DROP FOREIGN KEY \`FK_1155b29c6c41fdb1e13f8109d1f\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_c43106713de3d201624ebe865b\` ON \`name_space\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`name_space\` CHANGE \`languageId\` \`languageId\` int NOT NULL
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`IDX_c43106713de3d201624ebe865b\` ON \`name_space\` (\`name\`, \`languageId\`)
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
            DROP INDEX \`IDX_c43106713de3d201624ebe865b\` ON \`name_space\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`name_space\` CHANGE \`languageId\` \`languageId\` int NULL
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`IDX_c43106713de3d201624ebe865b\` ON \`name_space\` (\`name\`, \`languageId\`)
        `);
        await queryRunner.query(`
            ALTER TABLE \`name_space\`
            ADD CONSTRAINT \`FK_1155b29c6c41fdb1e13f8109d1f\` FOREIGN KEY (\`languageId\`) REFERENCES \`language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`IDX_cb0a05d3fca0a698ee16ac06df\` ON \`language_version\` (\`languageId\`)
        `);
    }

}
