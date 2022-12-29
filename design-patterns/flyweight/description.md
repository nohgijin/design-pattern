## Flyweight
### 개요
- 다수의 같은 object를 만들 때 메모리를 절약하기 좋음
```
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
```
- 같은 id를 가지고 있을 경우 체크하는 로직이 들어가고, id가 다를 경우 id를 추가해주는 로직이 들어감
- 도서관에는 같은 책이 여러 권 있으므로 addBook함수를 제작
```
const bookList = [];

const addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availability,
    isbn
  };

  bookList.push(book);
  return book;
};
```