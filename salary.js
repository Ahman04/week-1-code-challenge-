//Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Tax rates
    const payeRates = [ // Pay As You Earn (PAYE) rates const means they won't change
        { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 32333, rate: 25 },
        { min: 32334, max: 500000, rate: 30 },
        { min: 500001, max: 800000, rate: 32.5 },
        { min: 800001, max: Infinity, rate: 35 }
    ];

    // NHIF Deductions
    const nhifRates = [ 
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];

    // NSSF contributions
    const nssfRate = 0.06;

    // Calculate paye
    let paye = 0;
    for (const rate of payeRates) { // for loop to iterate through payeRates means it will check each rate
        if (basicSalary + benefits >= rate.min && basicSalary + benefits <= rate.max) { // check if the salary falls within the range
            paye = (basicSalary + benefits) * (rate.rate / 100); // means it will calculate the paye
            break; // exit the loop once the correct rate is found
        }
    }

    // Calculate NHIF Deductions
    let nhifDeduction = 0;
    for (const rate of nhifRates) {
        if (basicSalary >= rate.min && basicSalary <= rate.max) {
            nhifDeduction = rate.deduction;
            break;
        }
    }

    // Calculate NSSF Deductions
    const nssfDeduction = basicSalary * nssfRate; // shows how much is deducted for nssf
 
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits; // shows how much is earned before deductions

    // Calculate Net Salary
    const netSalary = grossSalary - paye - nhifDeduction - nssfDeduction; //shows how much is earned after deductions

    // Return all calculations

    return { // return shows the results of the calculations
        paye: paye,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        grossSalary: grossSalary,
        netSalary: netSalary
    };
}

// Example usage
const basicSalary = 100000; //  my own Example basic salary
const benefits = 70000; //  my own Example benefits
const result = calculateNetSalary(basicSalary, benefits); // Call the function with example values
console.log("Net Salary:", result.netSalary); // Log the net salary to the console

