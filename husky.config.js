module.exports = {
    hooks: {
        'pre-commit': 'npm run test',
        'pre-push': 'ng test',
        // 'pre-commit': 'ng test',
    },
}
