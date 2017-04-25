import { NgHelloWorldPage } from './app.po';

describe('ng-hello-world App', () => {
  let page: NgHelloWorldPage;

  beforeEach(() => {
    page = new NgHelloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
