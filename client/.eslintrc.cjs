module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        jsx: true,
        useJSXTextNode: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'eslint-config-prettier',
        'plugin:import/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
    settings: { 'import/resolver': { typescript: {} }},
    rules: {
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],

        'react/prop-types': 'off',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: 'useRecoilCallback',
            },
        ],

        '@typescript-eslint/no-explicit-any': 'warn',

        'import/newline-after-import': 'warn',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: "@emotion/**",
                        group: "external",
                        position: "after"
                    },
                    {
                        pattern: "@pages/**",
                        group: "internal",
                        position: "after"
                    },
                    {
                        pattern: "@common/**",
                        group: "internal",
                        position: "before"
                    }
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};
