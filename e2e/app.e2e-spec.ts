import { DezeWeddingWebPage } from './app.po';

describe('deze-wedding-web App', () => {
  let page: DezeWeddingWebPage;

  beforeEach(() => {
    page = new DezeWeddingWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
