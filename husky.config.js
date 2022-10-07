module.exports = {
    hooks: {
        'pre-commit': 'ng run test',
        'pre-push': 'ng test',
        // 'pre-commit': 'ng test',
    },
}
