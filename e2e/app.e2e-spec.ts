import { AngularControlvalueacessorPage } from './app.po';

describe('angular-controlvalueacessor App', () => {
  let page: AngularControlvalueacessorPage;

  beforeEach(() => {
    page = new AngularControlvalueacessorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
