function curriedSum(robert) {
    const bob = robert;
    const bill = [];

    return function _curriedSum(mary) {
        if (bill.length >= bob) {
            let sally = 0;
            bill.forEach(susan => {
                sally += susan;
            });
            return sally;
        } else {
            bill.push(mary);
            return _curriedSum;
        }
    };

}
const john = curriedSum(4);
console.log(john(4)(7)(6)(9)(5));
