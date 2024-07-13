module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: 'airbnb-base',
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        // base
        'no-param-reassign': 'off',
        'no-restricted-syntax': 'warn',
        'arrow-parens': ['warn', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'no-console': 'off',
        'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 0, maxBOF: 0}],
        'no-plusplus': 'off',
        'no-shadow': ['error', {builtinGlobals: false, hoist: 'all', allow: ['error']}],
        'no-unused-expressions': ['error', {allowShortCircuit: true, allowTernary: true}],
        'no-use-before-define': 'off',
        'object-curly-spacing': ['error', 'never'],
        'space-before-function-paren': ['error', {anonymous: 'always', named: 'always'}],
        'space-in-parens': 'off',
        'spaced-comment': 'off',
        'class-methods-use-this': 'off',
        indent: ['error', 4, {SwitchCase: 1}],
        'default-case': 'off',
        'max-len': ['warn', {code: 150}],
        'no-multi-assign': 'off',
        'no-return-assign': ['warn', 'except-parens'],
        'import/no-cycle': 'off',
        'no-restricted-exports': 'off',
        'no-unused-vars': 'error',
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    minProperties: 6,
                    multiline: true,
                    consistent: true
                },
                ObjectPattern: {
                    minProperties: 6,
                    multiline: true,
                    consistent: true
                },
                ImportDeclaration: {
                    minProperties: 6,
                    multiline: true,
                    consistent: true
                },
                ExportDeclaration: {
                    minProperties: 6,
                    multiline: true,
                    consistent: true
                }
            }
        ],
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: ['directive', 'return', 'export', 'cjs-export', 'try', 'function']},
            {blankLine: 'always', prev: ['directive', 'export', 'cjs-export', 'try', 'function'], next: '*'},
            {blankLine: 'any', prev: ['export'], next: ['export']},
            {blankLine: 'any', prev: 'directive', next: 'directive'}
        ],

        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true
            }
        ]
    }
};
