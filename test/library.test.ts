import { expect } from 'chai';
import { Library } from '../src/library'; // Оновіть шлях до файлу, якщо потрібно
import { IBook } from '../src/models'; // Оновіть шлях до файлу, якщо потрібно

describe('Library Class', () => {
  let library: Library<IBook>;

  beforeEach(() => {
    // Очищення localStorage перед кожним тестом
    localStorage.clear();
    // Створення нової інстанції Library для тестування
    library = new Library<IBook>('testLibrary');
  });

  it('should add an item and generate an ID', () => {
    const item: IBook = {
      id: '',
      title: 'Book Title',
      author: 'Book Author',
      year: 2024,
      isBorrowed: false,
    };
    const id = library.add(item);
    expect(id).to.be.a('string');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(id).to.not.be.empty;
    const addedItem = library.findById(id);
    expect(addedItem).to.deep.equal({ ...item, id });
  });

  it('should remove an item by ID', () => {
    const item: IBook = {
      id: '',
      title: 'Book Title',
      author: 'Book Author',
      year: 2024,
      isBorrowed: false,
    };
    const id = library.add(item);
    library.remove(id);
    const removedItem = library.findById(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(removedItem).to.be.undefined;
  });

  it('should update an item', () => {
    const item: IBook = {
      id: '',
      title: 'Book Title',
      author: 'Book Author',
      year: 2024,
      isBorrowed: false,
    };
    const id = library.add(item);
    const updatedItem: IBook = { ...item, title: 'Updated Title' };
    library.update(updatedItem);
    const foundItem = library.findById(id);
    expect(foundItem).to.deep.equal(updatedItem);
  });

  it('should get all items', () => {
    const item1: IBook = {
      id: '',
      title: 'Book Title 1',
      author: 'Author 1',
      year: 2024,
      isBorrowed: false,
    };
    const item2: IBook = {
      id: '',
      title: 'Book Title 2',
      author: 'Author 2',
      year: 2025,
      isBorrowed: false,
    };
    library.add(item1);
    library.add(item2);
    const allItems = library.getAll();
    expect(allItems).to.have.lengthOf(2);
  });
});
