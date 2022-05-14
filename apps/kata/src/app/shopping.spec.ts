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
});
