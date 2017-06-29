import { NeighborhomePage } from './app.po';

describe('neighborhome App', function() {
  let page: NeighborhomePage;

  beforeEach(() => {
    page = new NeighborhomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
