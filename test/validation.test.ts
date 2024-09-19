import { strict as assert } from 'assert';
import { Validation } from '../src/validation'; // Оновіть шлях до файлу, якщо потрібно

describe('Validation Class', () => {
  it('should validate book correctly', () => {
    const valid = Validation.validateBook('Title', 'Author', '2024');
    assert.deepEqual(valid, {});

    const invalid = Validation.validateBook('', '', 'invalid');
    assert.deepEqual(invalid, {
      bookTitle: 'Назва книги не може бути пустою',
      bookAuthor: 'Автор не може бути пустим',
      bookYear: 'Рік видання повинен бути числом',
    });
  });

  it('should validate user correctly', () => {
    const valid = Validation.validateUser('Name', 'email@example.com');
    assert.deepEqual(valid, {});

    const invalid = Validation.validateUser('', 'invalidemail');
    assert.deepEqual(invalid, {
      userName: "Ім'я не може бути пустим",
      userEmail: 'Email не є дійсним',
    });
  });
});
