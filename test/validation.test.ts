import { expect } from 'chai';
import { Validation } from '../src/validation';

describe('Validation Class', () => {
  it('should validate book correctly', () => {
    const valid = Validation.validateBook('Title', 'Author', '2024');
    expect(valid).to.deep.equal({});

    const invalid = Validation.validateBook('', '', 'invalid');
    expect(invalid).to.deep.equal({
      bookTitle: 'Назва книги не може бути пустою',
      bookAuthor: 'Автор не може бути пустим',
      bookYear: 'Рік видання повинен бути числом',
    });
  });

  it('should validate user correctly', () => {
    const valid = Validation.validateUser('Name', 'email@example.com');
    expect(valid).to.deep.equal({});

    const invalid = Validation.validateUser('', 'invalidemail');
    expect(invalid).to.deep.equal({
      userName: "Ім'я не може бути пустим",
      userEmail: 'Email не є дійсним',
    });
  });
});
