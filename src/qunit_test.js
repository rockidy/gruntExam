
require(['qunit'], function(QUnit) {
  QUnit.start();

  QUnit.test('test', function(assert) {
    assert.expect(1);
    assert.ok(true, 'test...');
  });
});
