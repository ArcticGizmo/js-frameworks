import { module, test } from 'qunit';
import { setupTest } from 'emberjs/tests/helpers';

module('Unit | Route | tic_tac_toe', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tic-tac-toe');
    assert.ok(route);
  });
});
