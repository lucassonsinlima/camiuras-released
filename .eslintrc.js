module.exports = {
    env: {
       "browsers": ["last 2 versions", "ie >= 7"],
        es6: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never']
    },
    globals: {
        module: true,
        require: true,
        __dirname: true
    }
}
