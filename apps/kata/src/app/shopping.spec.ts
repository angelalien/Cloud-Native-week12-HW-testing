import { Shopping } from './shopping';

describe('Shopping', () => {
  it('should create an instance', () => {
    expect(new Shopping()).toBeTruthy();
  });

  test('buy no books', () => {
    const shopping = new Shopping();
    shopping.buy([0,0,0,0,0]);    
    expect(shopping.price).toBe(0);
  });

  test('buy 1 book(ep1)', () => {
    const shopping = new Shopping();
    shopping.buy([1,0,0,0,0]);    
    expect(shopping.price).toBe(100);
  });

  test('buy 2 books(ep1,2)', () => {
    const shopping = new Shopping();
    shopping.buy([1,1,0,0,0]);    
    expect(shopping.price).toBe(190);
  });

  test('buy 3 books(ep1)', () => {
    const shopping = new Shopping();
    shopping.buy([3,0,0,0,0]);    
    expect(shopping.price).toBe(300);
  });

  test('buy 3 books(ep1,2)', () => {
    const shopping = new Shopping();
    shopping.buy([1,2,0,0,0]);    
    expect(shopping.price).toBe(290);
  });

  test('buy 3 books(ep1,3,5)', () => {
    const shopping = new Shopping();
    shopping.buy([1,0,1,0,1]);    
    expect(shopping.price).toBe(270);
  });

  test('buy 4 books(ep1,2)', () => {
    const shopping = new Shopping();
    shopping.buy([2,2,0,0,0]);    
    expect(shopping.price).toBe(380);
  });

  test('buy 4 books(ep1,2,3,4)', () => {
    const shopping = new Shopping();
    shopping.buy([1,1,1,1,0]);    
    expect(shopping.price).toBe(320);
  });

  test('buy 5 books(ep1,2,3,4,5)', () => {
    const shopping = new Shopping();
    shopping.buy([1,1,1,1,1]);    
    expect(shopping.price).toBe(375);
  });

  test('buy 6 books(ep1,2,3,4)', () => {
    const shopping = new Shopping();
    shopping.buy([2,1,2,1,0]);    
    expect(shopping.price).toBe(510);
  });

  test('buy 6 books(ep1,2,3,4,5)', () => {
    const shopping = new Shopping();
    shopping.buy([1,2,1,1,1]);    
    expect(shopping.price).toBe(475);
  });

  test('buy 8 books(ep1,2,3,4,5)', () => {
    const shopping = new Shopping();
    shopping.buy([2,2,2,1,1]);    
    expect(shopping.price).toBe(640);
  });

  test('buy 23 books(ep1,2,3,4,5)', () => {
    const shopping = new Shopping();
    shopping.buy([5,5,4,5,4]);    
    expect(shopping.price).toBe(1765);
  });
  
});
