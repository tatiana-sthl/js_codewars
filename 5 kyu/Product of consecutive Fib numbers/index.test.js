describe('Tests', () => {
  it('test', () => {
    Test.assertSimilar(productFib(4895), [55, 89, true]);
    Test.assertSimilar(productFib(5895), [89, 144, false]);
    Test.assertSimilar(productFib(74049690), [6765, 10946, true]);
    Test.assertSimilar(productFib(84049690), [10946, 17711, false]);
    Test.assertSimilar(productFib(193864606), [10946, 17711, true]);
    Test.assertSimilar(productFib(447577), [610, 987, false]);
    Test.assertSimilar(productFib(602070), [610, 987, true]);
  });
});
