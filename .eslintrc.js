module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['eslint:recommended'],
    rules: {
        'no-console': 'off', // handled by tslint
        'no-debugger': 'off', // handled by tslint
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    overrides: [
        {
            files: ['**/*.test.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
