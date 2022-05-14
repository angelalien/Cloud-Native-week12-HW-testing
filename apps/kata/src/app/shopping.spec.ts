import { Shopping } from './shopping';

describe('Shopping', () => {
  it('should create an instance', () => {
    expect(new Shopping()).toBeTruthy();
  });

  test('buy 1 book(ep1)', () => {
    const shopping = new Shopping();
    shopping.buy(1);    
    expect(shopping.price).toBe(100);
  });
});
