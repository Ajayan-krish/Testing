const xlsx = require('xlsx');

module.exports = {
    'Extract and Compare Resume Data': function(browser){
        const email = 'test@test.com';
        const password = 'Qwerty@123';
        let extractedData = {};

        // Navigate and extract data (same as your current code)
        browser
            .url('https://demo.lcp.neartekpod.io/')
            .maximizeWindow()
            .useXpath()
            .setValue('//*[@id="username"]', email).pause(2000)
            .setValue('//*[@id="password"]', password)
            .click("//button[text()='Continue']")
            .click("//a[text()='Hiring']")
            .click("//a[text()='Job Description']")
            .click("(//span[@class='text-sm font-medium'])[1]").pause(5000)
            .click("//button[text()='Candidate']").pause(2000)
            .saveScreenshot('C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/Screenshots/Before-cad.png')
            .click("//a[text()='Add New']").pause(2000)
            .click("//label[@for='file']").pause(10000)//.setValue("C:/Users/ajaya/OneDrive/Desktop/resume/Ajith.pdf")
            .waitForElementPresent("/html/body/div[1]/div[2]/main/div/div/div/div/form/div/div[1]/div[1]/div/input", 10000)
            .getValue("/html/body/div[1]/div[2]/main/div/div/div/div/form/div/div[1]/div[1]/div/input", function(result) {
                extractedData.applicationDate = result.value;
            }).pause(5000)
            .getValue("//input[@name='middle_name']", function(result) {
                extractedData.name = result.value;
            }).pause(5000)
            .getValue("//input[@name='last_name']", function(result) {
                extractedData.email = result.value;
            }).pause(5000)
            .getValue("//input[@name='email']", function(result) {
                extractedData.phone = result.value;
            }).pause(5000)
            .getValue("//input[@name='phone_number']", function(result) {
                extractedData.experience = result.value;
            }).pause(5000)
            .getValue("//input[@name='years_of_experience']", function(result) {
                extractedData.experience = result.value;
            }).pause(10000)
            .getValue("//textarea[@name='key_skills']", function(result) {
                extractedData.experience = result.value;
            }).pause(5000)
            .execute(function() {
                document.querySelector("//textarea[@name='experience_summary']").scrollIntoView();
              })
            getValue("//textarea[@name='experience_summary']", function(result) {
                extractedData.experience = result.value;
            }).pause(5000)
            getValue("//textarea[@name='employment_history[0]']", function(result) {
                extractedData.experience = result.value;
            }).pause(5000)
            getValue("//textarea[@name='education[0]']", function(result) {
                extractedData.experience = result.value;
            }).pause(5000)
            getValue("//textarea[@name='achievements']", function(result) {
                extractedData.experience = result.value;
            }).pause(5000)
            getValue("//textarea[@name='certifications']", function(result) {
                extractedData.experience = result.value;
            }).pause(5000)
        




            .perform(function() {
                // Store the extracted data in an Excel file
                const workbook = xlsx.utils.book_new();
                const worksheet = xlsx.utils.json_to_sheet([extractedData]);
                xlsx.utils.book_append_sheet(workbook, worksheet, 'Resume Data');
                xlsx.writeFile(workbook, 'extracted_data.xlsx');

                console.log('Data saved to extracted_data.xlsx');
             })

            // // Compare with original data
            // .perform(function() {
            //     // Load both Excel files
            //     const extractedWorkbook = xlsx.readFile('extracted_data.xlsx');
            //     const originalWorkbook = xlsx.readFile('original_data.xlsx');

            //     const extractedSheet = extractedWorkbook.Sheets[extractedWorkbook.SheetNames[0]];
            //     const originalSheet = originalWorkbook.Sheets[originalWorkbook.SheetNames[0]];

            //     const extractedData = xlsx.utils.sheet_to_json(extractedSheet)[0];
            //     const originalData = xlsx.utils.sheet_to_json(originalSheet)[0];

            //     let matchCount = 0;
            //     let totalFields = 0;

            //     // Compare each field
            //     for (let key in originalData) {
            //         totalFields++;
            //         if (extractedData[key] === originalData[key]) {
            //             matchCountercentage = (matchCount / totalFields) * 100;++;
            //             console.log(`Field "${key}" matches: ${extractedData[key]}`);
            //         } else {
            //             console.log(`Field "${key}" does not match. Extracted: ${extractedData[key]}, Original: ${originalData[key]}`);
            //         }
            //     }

            //     // Calculate similarity percentage
            //     const similarityP
            //     console.log(`Similarity Percentage: ${similarityPercentage.toFixed(2)}%`);
            // })
           // .end();
    }
};
