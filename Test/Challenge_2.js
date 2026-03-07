// After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip").
//  Write a JavaScript program using a for loop that counts how many tests passed, failed, and were 
// skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict 
// (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
const testResults = ["pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passed++;//4
    } else if (testResults[i] === "fail") {
        failed++;//2
    } else if (testResults[i] === "skip") {
        skipped++;//1
    }
}

// Total tests
const totalTests = testResults.length;//7

// Pass rate percentage (based on total tests)
const passRate = ((passed / totalTests) * 100).toFixed(2);

let verdict;
if (failed === 0) {
    verdict = "Ready for release";
} else if (failed <= 2) {
    verdict = "Review required";
} else {
    verdict = "Block release";
}

//Test Report

console.log("Test Report");
console.log("Total Tests:", totalTests);
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("Skipped:", skipped);
console.log("Pass Rate:", passRate + "%");
console.log("Verdict:", verdict);