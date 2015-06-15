describe("findPairSpec", function() {
    it("should return true when pair in array adds up to target sum", function() {
        var arr = [1,2,3,4,5,6,7,8];
        var targetSum = 10;
        var isPairFound = findPair(arr, targetSum);

        expect(isPairFound).to.be.equal(true);
    });

    it("should return false when no pair adds up to target sum", function() {
        var arr = [1,2,3,4,5,6,7,8];
        var targetSum = 1000;
        var isPairFound = findPair(arr, targetSum);

        expect(isPairFound).to.be.equal(false);
    });

    it("should return true when integers repeat", function() {
        var arr = [1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,5,6,7,8];
        var targetSum = 1000;
        var isPairFound = findPair(arr, targetSum);

        expect(isPairFound).to.be.equal(false);
    });

    it("should work with negative numbers", function() {
        var arr = [-1,-2,-3,-4,-5,-6,-7,-8];
        var targetSum = 10;
        var isPairFound = findPair(arr, targetSum);

        expect(isPairFound).to.be.equal(false);
    });

    it("should work for very large numbers", function() {
        var arr = [];

        for(var i=0;i<1000000;i++){
            arr.push(Math.floor(Math.random() * i));
        }

        var targetSum = 1000;
        var isPairFound = findPair(arr, targetSum);

        expect(isPairFound).to.be.equal(true);
    });
});
