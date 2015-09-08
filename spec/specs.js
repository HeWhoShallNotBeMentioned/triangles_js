describe("triangle", function() {
  it("is false if not a triangle", function() {
    expect(triangle(1, 2, 4)).to.equal(false);
  });

  it("determines if the triangle is equilateral", function() {
    expect(triangle(3, 3, 3)).to.equal("equilateral");
  });

  it("determines if the triangle is isosceles", function() {
    expect(triangle(3, 4, 3)).to.equal("isosceles");
  });

  it("determines if the triangle is scalene", function() {
    expect(triangle(3, 4, 5)).to.equal("scalene");
  });

});
