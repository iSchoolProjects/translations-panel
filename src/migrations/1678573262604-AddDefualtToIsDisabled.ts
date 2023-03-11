import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDefualtToIsDisabled1678573262604 implements MigrationInterface {
    name = 'AddDefualtToIsDisabled1678573262604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`language\` CHANGE \`isDisabled\` \`isDisabled\` tinyint NOT NULL DEFAULT 0
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`language\` CHANGE \`isDisabled\` \`isDisabled\` tinyint NOT NULL
        `);
    }

}
