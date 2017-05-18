import { MyInputPage } from './app.po';

describe('my-input App', () => {
  let page: MyInputPage;

  beforeEach(() => {
    page = new MyInputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
