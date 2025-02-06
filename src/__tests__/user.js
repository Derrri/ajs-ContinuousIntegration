const loadUser = require  ("../loadUser");
const httpGet = require ("../http");
jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});

test('should call loadUser once', () => {
    httpGet.mockReturnValue(JSON.stringify({}));
    loadUser(1);
    expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});

// Новый тест для демонстрации мокирования
test('httpGet should be called and return mocked value', () => {
    // Устанавливаем мок возвращаемого значения
    httpGet.mockReturnValue(JSON.stringify({}));

    // Вызовем мокированную функцию
    const result = httpGet();

    // Проверяем, что httpGet была вызвана
    expect(httpGet).toBeCalled();
    
    // Проверяем, что возвращаемое значение соответствует ожидаемому
    expect(result).toBe('{}');
});

// Новый тест для вызова оригинальной функции
test('httpGet original function should return "{}"', () => {
    const originalHttpGet = jest.requireActual('../http');
    const result = originalHttpGet(); // Вызов оригинальной функции

    expect(result).toBe('{}'); // Проверяем, что возвращаемое значение соответствует ожидаемому
});