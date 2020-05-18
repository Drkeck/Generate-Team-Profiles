const Engineer = require('../lib/Engineer');

test('check if engineer is an object', () => {
    const engineer = new Engineer('jason', 2, "another@test.com", 'Jtech');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('check engineers function callls "getName/Id/Email/Github" ', () => {
    const engineer = new Engineer('jason', 2, "another@test.com", 'Jtech');

    expect(engineer.getName()).toBe('jason');
    expect(engineer.getId()).toBe(2);
    expect(engineer.getEmail()).toBe('another@test.com');
    expect(engineer.getGitHub()).toBe('Jtech');
});

test('check employee role', () => {
    const engineer = new Engineer('jason', 2, "another@test.com", 'Jtech');
    
    expect(engineer.getRole()).toBe('Engineer');
})