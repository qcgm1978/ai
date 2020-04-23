QUnit.test("prettydate basics", function (assert) {
    const earth = new Earth()
    const mass = earth.solve()
    assert.toBeCloseTo(mass, 6e24, -23)

});