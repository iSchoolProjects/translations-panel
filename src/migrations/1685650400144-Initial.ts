import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685650400144 implements MigrationInterface {
    name = 'Initial1685650400144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`language_version\` (
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`version\` bigint NOT NULL,
                \`code\` varchar(255) NOT NULL,
                \`languageCode\` varchar(255) NULL,
                INDEX \`IDX_6e7a56ef3c0947638443f980de\` (\`code\`),
                UNIQUE INDEX \`REL_b6917420eb24c432092b2847d1\` (\`languageCode\`),
                PRIMARY KEY (\`code\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`translations\` (
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`key\` varchar(255) NOT NULL,
                \`value\` text NOT NULL,
                \`namespace\` varchar(255) NOT NULL,
                \`code\` varchar(255) NOT NULL,
                \`approved\` tinyint NOT NULL DEFAULT 1,
                \`namespacesCode\` varchar(255) NULL,
                \`languageCode\` varchar(255) NULL,
                FULLTEXT INDEX \`IDX_78ed43861ae70853b8e484c176\` (\`value\`),
                UNIQUE INDEX \`IDX_49719aa4abc326cd518f97220b\` (\`key\`, \`languageCode\`, \`namespace\`),
                PRIMARY KEY (\`key\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`name_space\` (
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`name\` varchar(255) NOT NULL,
                \`code\` varchar(255) NOT NULL,
                \`isCompleted\` tinyint NOT NULL DEFAULT 0,
                \`languageCode\` varchar(255) NULL,
                UNIQUE INDEX \`IDX_6e2fe1c6b8205b73fdcb8b2054\` (\`name\`, \`languageCode\`),
                PRIMARY KEY (\`code\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`language\` (
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`code\` varchar(255) NOT NULL,
                \`isDisabled\` tinyint NOT NULL DEFAULT 0,
                \`country\` varchar(255) NOT NULL,
                UNIQUE INDEX \`IDX_465b3173cdddf0ac2d3fe73a33\` (\`code\`),
                PRIMARY KEY (\`code\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`language_version\`
            ADD CONSTRAINT \`FK_b6917420eb24c432092b2847d10\` FOREIGN KEY (\`languageCode\`) REFERENCES \`language\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\`
            ADD CONSTRAINT \`FK_3fa69b1499a5bd4ead78b9de200\` FOREIGN KEY (\`namespacesCode\`) REFERENCES \`name_space\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\`
            ADD CONSTRAINT \`FK_5cdad6643abe2b5833cf01cc940\` FOREIGN KEY (\`languageCode\`) REFERENCES \`language\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`name_space\`
            ADD CONSTRAINT \`FK_2489f9a9aff2698d0d1f5df0416\` FOREIGN KEY (\`languageCode\`) REFERENCES \`language\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`name_space\` DROP FOREIGN KEY \`FK_2489f9a9aff2698d0d1f5df0416\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\` DROP FOREIGN KEY \`FK_5cdad6643abe2b5833cf01cc940\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`translations\` DROP FOREIGN KEY \`FK_3fa69b1499a5bd4ead78b9de200\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`language_version\` DROP FOREIGN KEY \`FK_b6917420eb24c432092b2847d10\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_465b3173cdddf0ac2d3fe73a33\` ON \`language\`
        `);
        await queryRunner.query(`
            DROP TABLE \`language\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_6e2fe1c6b8205b73fdcb8b2054\` ON \`name_space\`
        `);
        await queryRunner.query(`
            DROP TABLE \`name_space\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_49719aa4abc326cd518f97220b\` ON \`translations\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_78ed43861ae70853b8e484c176\` ON \`translations\`
        `);
        await queryRunner.query(`
            DROP TABLE \`translations\`
        `);
        await queryRunner.query(`
            DROP INDEX \`REL_b6917420eb24c432092b2847d1\` ON \`language_version\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_6e7a56ef3c0947638443f980de\` ON \`language_version\`
        `);
        await queryRunner.query(`
            DROP TABLE \`language_version\`
        `);
    }

}
