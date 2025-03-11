/* eslint-disable no-undef */
/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'uuid',
      default: pgm.func('gen_random_uuid()'),
      notNull: true,
      primaryKey: true,
    },
    firstName: {
      type: 'varchar(255)',
      default: null,
    },
    lastName: {
      type: 'varchar(255)',
      default: null,
    },
    username: {
      type: 'varchar(255)',
      notNull: true,
      unique: true,
      default: pgm.func('gen_random_uuid()'),
      index: true,
    },
    email: {
      type: 'varchar(255)',
      notNull: true,
      unique: true,
      index: true,
    },
    password: {
      type: 'varchar(255)',
      notNull: true,
    },
    role: {
      type: 'enum',
      notNull: true,
      default: 'user',
      enum: ['user', 'admin', 'editor'],
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('now()'),
    },
    updatedAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('now()'),
    },
    isActive: {
      type: 'boolean',
      notNull: true,
      default: true,
    },
    utm: {
      type: 'jsonb',
      default: null,
    },
    isVerified: {
      type: 'boolean',
      notNull: true,
      default: false,
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable('users');
};
