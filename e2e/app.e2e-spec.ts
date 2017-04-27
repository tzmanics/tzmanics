import { Tzmanics.ComPage } from './app.po';

describe('tzmanics.com App', () => {
  let page: Tzmanics.ComPage;

  beforeEach(() => {
    page = new Tzmanics.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
