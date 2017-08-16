import { SamplePaymentAppPage } from './app.po';

describe('sample-payment-app App', () => {
  let page: SamplePaymentAppPage;

  beforeEach(() => {
    page = new SamplePaymentAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
