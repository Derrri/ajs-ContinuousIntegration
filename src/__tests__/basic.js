const calculateTotal  = require ('../calculate');

test('basic test', () => {
    const result = 4;
    expect(result).toBe(4);
});

test('calculateTotal sum', () => {
    const list = [
        { id: 456, name: 'Война и мир', count: 3, price: 400 },
        { id: 77, name: 'JavaScript', count: 1, price: 1300 }
    ];
    const result = calculateTotal(list);
    expect(result).toBe(2500);
});

test('calculateTotal with discount', () => {
    const list = [
        { id: 456, name: 'Война и мир', count: 3, price: 401 },
        { id: 77, name: 'JavaScript', count: 1, price: 1300 }
    ];
    const result = calculateTotal(list, true);
    expect(result).toBeCloseTo(2230.173); // 2500 * 0.5
});