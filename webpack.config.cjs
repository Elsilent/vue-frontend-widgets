const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');

const makeVueEntry = (name) => ({
    entry: `./src/components/${name}.js`,
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)%/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: 'defaults',
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.pug$/,
                loader: 'vue-pug-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
    output: {
        filename: `${name}.js`,
        library: {
            type: 'commonjs',
        },
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
});

const vueEntries = [
    'container',
    'image',
    'interaction',
    'label',
    'view',
];

module.exports = vueEntries.map((entry) => makeVueEntry(entry));
