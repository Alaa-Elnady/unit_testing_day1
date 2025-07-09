const User = require("../index");

describe("User", () => {
  let user;

  beforeEach(() => {
    user = new User("JohnDoe", "password123");
  });

  it("constructor sets name, password, and initializes empty cart", () => {
    expect(user.name).toBe("JohnDoe");
    expect(user.password).toBe("password123");
    expect(user.cart).toEqual([]);
  });

  it("addToCart adds product to cart", () => {
    const product = { name: "Book", price: 10 };
    user.addToCart(product);
    expect(user.cart).toEqual([product]);
  });

  it("calculateTotalCartPrice returns correct total", () => {
    user.cart = [
      { name: "Book", price: 10 },
      { name: "Pen", price: 5 },
    ];
    expect(user.calculateTotalCartPrice()).toBe(15);
  });

  it("calculateTotalCartPrice returns 0 for empty cart", () => {
    expect(user.calculateTotalCartPrice()).toBe(0);
  });

  it("checkout calls paymentModel methods and returns true if verified", () => {
    const paymentModel = {
      goToVerifyPage: jest.fn(),
      returnBack: jest.fn(),
      isVerify: jest.fn().mockReturnValue(true),
    };
    const result = user.checkout(paymentModel);
    expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
    expect(paymentModel.returnBack).toHaveBeenCalled();
    expect(paymentModel.isVerify).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it("checkout returns false if not verified", () => {
    const paymentModel = {
      goToVerifyPage: jest.fn(),
      returnBack: jest.fn(),
      isVerify: jest.fn().mockReturnValue(false),
    };
    const result = user.checkout(paymentModel);
    expect(result).toBe(false);
  });
});
