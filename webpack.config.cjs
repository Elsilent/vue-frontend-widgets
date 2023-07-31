const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');

const makeEntry = (name, config) => ({
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
    ...config,
});

const makeUtilEntry = (name) => makeEntry(name, {
    entry: `./src/utils/${name}.js`,
});

const makeVueEntry = (name) => makeEntry(name, {
    entry: `./src/components/${name}.js`,
});

const utilEntries = [
    'numeral',
];

const vueEntries = [
    'container',
    'image',
    'interaction',
    'label',
    'view',
];

module.exports = [
    ...utilEntries.map((entry) => makeUtilEntry(entry)),
    ...vueEntries.map((entry) => makeVueEntry(entry)),
];
