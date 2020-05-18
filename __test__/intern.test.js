const Intern = require('../lib/intern');

test('if intern returns an object', () => {
    const intern = new Intern('alex', 3, 'great@test.com', 'Uc Berkley Extension');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('interns call functions return proper data "name/id/email/school"', () => {
    const intern = new Intern('alex', 3, 'great@test.com', 'Uc Berkley Extension');

    expect(intern.name).toBe('alex');
    expect(intern.id).toBe(3);
    expect(intern.email).toBe('great@test.com');
    expect(intern.school).toBe('Uc Berkley Extension');
});

test('intern role comes back as intern', () => {
    const intern = new Intern('alex', 3, 'great@test.com', 'Uc Berkley Extension');

    expect(intern.role).toBe('Intern');
})