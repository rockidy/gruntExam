var testModules = [
  'qunit',
  '../src/qunit_test.js',
  '../src/qunit_test2.js'
];

// Resolve all testModules and then start the Test Runner.
require(testModules, function(QUnit) {
  console.log('\n');
  console.log('testsuite start.....');

  QUnit.load();
  QUnit.start();
});