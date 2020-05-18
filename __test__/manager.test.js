const Manager = require('../lib/manager');

test('create manager obj', () => {
    const manager = new Manager('kyle', 1, 'test@email.com', 22318);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
});

test('recieve name, id, and email from function calls.', () => {
    const manager = new Manager('kyle', 1, 'test@email.com', 22318);

    expect(manager.getName()).toBe('kyle');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('test@email.com');
    expect(manager.getOffice()).toBe(22318)
});

test('check role of employee, specifically manager', () => {
    const manager = new Manager('kyle', 1, 'test@email.com', 22318);

    expect(manager.getRole()).toBe('Manager');
});