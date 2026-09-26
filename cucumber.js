// module.exports = {
//     default: {
//         require: [
//             'tests/features/stepdefinition/**/*.js',
//             'tests/features/Support/**/*.js'
//         ]
//     }
// };

module.exports = {
    default: {
        paths: [
            'tests/features/**/*.feature'
        ],
        require: [
            'tests/features/stepdefinition/**/*.js',
            'tests/features/Support/**/*.js'
        ]
    }
};

