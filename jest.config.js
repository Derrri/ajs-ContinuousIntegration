module.exports = {
  roots: ['<rootDir>/src'], // Указывает корневую директорию для тестов
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'], // Шаблоны для поиска тестов
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js', //  Пути к вашим исходным файлам
  ],
  // testPathIgnorePatterns: ['/node_modules/'],
};