import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOneToOneONlAguageVerions1678570497081 implements MigrationInterface {
    name = 'AddOneToOneONlAguageVerions1678570497081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`language_version\`
            ADD \`languageId\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`language_version\`
            ADD UNIQUE INDEX \`IDX_cb0a05d3fca0a698ee16ac06df\` (\`languageId\`)
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`REL_cb0a05d3fca0a698ee16ac06df\` ON \`language_version\` (\`languageId\`)
        `);
        await queryRunner.query(`
            ALTER TABLE \`language_version\`
            ADD CONSTRAINT \`FK_cb0a05d3fca0a698ee16ac06df4\` FOREIGN KEY (\`languageId\`) REFERENCES \`language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`language_version\` DROP FOREIGN KEY \`FK_cb0a05d3fca0a698ee16ac06df4\`
        `);
        await queryRunner.query(`
            DROP INDEX \`REL_cb0a05d3fca0a698ee16ac06df\` ON \`language_version\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`language_version\` DROP INDEX \`IDX_cb0a05d3fca0a698ee16ac06df\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`language_version\` DROP COLUMN \`languageId\`
        `);
    }

}
