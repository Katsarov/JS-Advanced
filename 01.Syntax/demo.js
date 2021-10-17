function logTrue(val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.")
    }
}

logTrue(34);
logTrue(false);
logTrue("TnnnyG");
logTrue(undefined);
logTrue({});
logTrue(null);
logTrue([]);
logTrue(NaN);
logTrue(0);
logTrue(0n);
logTrue("");


