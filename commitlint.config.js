module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'], // Prevents empty type
    'subject-empty': [2, 'never'], // Prevents empty subject
    'subject-case': [2, 'always', 'sentence-case'], // Ensures subject is readable
    'header-max-length': [2, 'always', 100], // Max length for commit messages
  },
};
