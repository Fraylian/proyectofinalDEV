const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
test('la página debe contener Hola Mundo', () => {
  expect(html).toMatch(/Hola Mundo/);
});
