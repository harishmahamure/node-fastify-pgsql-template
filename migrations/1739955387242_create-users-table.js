/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    // ✅ Fix: Create ENUM type before using it
    pgm.createType("user_role", ["user", "admin", "editor"]);

    pgm.createTable("users", {
        id: {
            type: "uuid",
            default: pgm.func("gen_random_uuid()"),
            notNull: true,
            primaryKey: true,
        },
        firstName: {
            type: "varchar(255)",
            default: null,
        },
        lastName: {
            type: "varchar(255)",
            default: null,
        },
        username: {
            type: "varchar(255)",
            notNull: true,
            unique: true,
            default: pgm.func("gen_random_uuid()"),
        },
        email: {
            type: "varchar(255)",
            notNull: true,
            unique: true,
        },
        password: {
            type: "varchar(255)",
            notNull: true,
        },
        role: {
            type: "user_role", // ✅ Now uses the created ENUM type
            notNull: true,
            default: "user",
        },
        createdAt: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("now()"),
        },
        updatedAt: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("now()"),
        },
        isActive: {
            type: "boolean",
            notNull: true,
            default: true,
        },
        utm: {
            type: "jsonb",
            default: null,
        },
        isVerified: {
            type: "boolean",
            notNull: true,
            default: false,
        },
    });

    // ✅ Fix: Create index for better query performance
    pgm.createIndex("users", ["email"]);
    pgm.createIndex("users", ["username"]);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
    pgm.dropTable("users");

    // ✅ Drop ENUM type after dropping the table
    pgm.dropType("user_role");
};
