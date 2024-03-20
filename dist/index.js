"use strict";
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(100, 2021);
//# sourceMappingURL=index.js.map