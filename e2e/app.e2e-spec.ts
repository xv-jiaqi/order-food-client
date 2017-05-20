import { OrderFrontPage } from './app.po';

describe('order-front App', () => {
  let page: OrderFrontPage;

  beforeEach(() => {
    page = new OrderFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
