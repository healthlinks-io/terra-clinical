Terra.describeViewports('Detail List Item', ['tiny', 'small', 'medium', 'large', 'huge'], () => {
  describe('Displays a Detail List Item as expected', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item/default-list-item');
    });

    Terra.it.validatesElement();
  });
});
