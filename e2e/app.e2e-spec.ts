import { ICEAPPPage } from './app.po';

describe('iceapp App', () => {
  let page: ICEAPPPage;

  beforeEach(() => {
    page = new ICEAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
