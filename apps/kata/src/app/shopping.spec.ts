import { Shopping } from './shopping';

describe('Shopping', () => {
  it('should create an instance', () => {
    expect(new Shopping()).toBeTruthy();
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

  test('buy 3 books(ep1,2)', () => {
    const shopping = new Shopping();
    shopping.buy([1,2,0,0,0]);    
    expect(shopping.price).toBe(290);
  });

  test('buy 4 books(ep1,2)', () => {
    const shopping = new Shopping();
    shopping.buy([2,2,0,0,0]);    
    expect(shopping.price).toBe(380);
  });

  test('buy 8 books(ep1,2,3,4,5)', () => {
    const shopping = new Shopping();
    shopping.buy([2,2,2,1,1]);    
    expect(shopping.price).toBe(640);
  });
});
