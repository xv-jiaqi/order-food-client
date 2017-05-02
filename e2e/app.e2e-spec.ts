import { OrderPage } from './app.po';

describe('order App', () => {
  let page: OrderPage;

  beforeEach(() => {
    page = new OrderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
