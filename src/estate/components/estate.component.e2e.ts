describe('About', () => {

  beforeEach( () => {
    browser.get('estate');
  });

  it('should have correct feature heading', () => {
      expect(element(by.css('sd-app sd-estate h2')).getText())
      .toEqual('Features');
  });
});
