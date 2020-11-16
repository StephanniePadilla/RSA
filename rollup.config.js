export default {
    input: 'index.js',
    output: [
        {
            file: 'build/index.cjs.js',
            format: 'cjs'
        },
        {
            file: 'build/index.esm.js',
            format: 'esm'
        }
    ],
    external: ['bigint-crypto-utils']
}