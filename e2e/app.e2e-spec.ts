import { BsAppPage } from './app.po';

describe('bs-app App', function() {
  let page: BsAppPage;

  beforeEach(() => {
    page = new BsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
