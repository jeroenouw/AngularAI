import { NgxAiPage } from './app.po';

describe('ngx-ai App', function() {
  let page: NgxAiPage;

  beforeEach(() => {
    page = new NgxAiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
