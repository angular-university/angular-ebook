import { FaInputPage } from './app.po';

describe('fa-input App', () => {
  let page: FaInputPage;

  beforeEach(() => {
    page = new FaInputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
