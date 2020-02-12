const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });
});

describe("catalogueService.checkBook", () => {
  test("returns true if the book exists in the list", () => {
    expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
  });

  test("returns false if the book exists in the list", () => {
    expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
  });
});


describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns the number of books beginning with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
  });

  test("returns 0 if no books begin with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
  });
});


describe("catalogueService.countBooksByKeyword", () => {
  test("returns the number of books that contain a keyword. Assassin should return 3.", () => {
    expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
  });

  test("Return 0 if no keyword is found ", () => {
    expect(catalogueService.countBooksByKeyword('pinapple')).toBe(0);
  })

});

describe("catalogueService.getBooksByAuthor", () => {
  test("returns an array of books by provided author.", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
      "A Tale of Two Cities by Charles Dickens",
      "Oliver Twist by Charles Dickens",
      "Great Expectations by Charles Dickens"
    ]);
  });

  test("return empty array if not books by author (Brad).", () => {
    expect(catalogueService.getBooksByAuthor("Brad")).toEqual([]);
  });

  test("returns the array of all books with author name Charles", () => {
    expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
      "A Tale of Two Cities by Charles Dickens",
      "Oliver Twist by Charles Dickens",
      "Great Expectations by Charles Dickens",
      "The Origin of Species by Charles Darwin"
    ]);
  });
});