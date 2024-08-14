// const xlsx = require('xlsx');

// module.exports = {
//   'Resume Data Comparison Test': function (browser) {
//     // Load the Excel files
//     const extractedWorkbook = xlsx.readFile('C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/FIle/File1.xlsx');
//     const originalWorkbook = xlsx.readFile('C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/FIle/File2.xlsx');

//     const extractedSheet = extractedWorkbook.Sheets[extractedWorkbook.SheetNames[0]];
//     const originalSheet = originalWorkbook.Sheets[originalWorkbook.SheetNames[0]];

//     const extractedData = xlsx.utils.sheet_to_json(extractedSheet);
//     const originalData = xlsx.utils.sheet_to_json(originalSheet);

//     let matchCount = 0;
//     const totalFields = extractedData.length;

//     // Compare each field
//     for (let i = 0; i < totalFields; i++) {
//       if (JSON.stringify(extractedData[i]) === JSON.stringify(originalData[i])) {
//         matchCount++;
//       }
//     }

//     // Calculate similarity percentage
//     const similarityPercentage = (matchCount / totalFields) * 100;

//     // Log the result
//     console.log(`Similarity Percentage: ${similarityPercentage.toFixed(2)}%`);

//     // End the session
//     browser.end();
//   }
// };





// const XLSX = require('xlsx');
 
// function readExcelFile(filePath) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];
//     return XLSX.utils.sheet_to_json(sheet);
// }
 
// module.exports = { readExcelFile };
// // compareData.js
// const { OpenAI } = require('openai');
// const openai = new OpenAI({ apiKey: ''});
 
// async function compareData(data1, data2) {
//     const response = await openai.chat.completions.create({
//         model: "gpt-4o-mini-2024-07-18",
//         messages: [
//             {
//                 role: "system",
//                 content: "You are an AI assistant specialized in comparing datasets. Determine whether the datasets match and provide a percentage of similarity. You will compare the data for meaning and semantic similarity and not for exact match"
//             },
//             {
//                 role: "user",
//                 content: `Compare the following two datasets and determine if they match and the percentage of similarity.
//                 Dataset 1: ${JSON.stringify(data1)}
//                 Dataset 2: ${JSON.stringify(data2)}`
//             }
//         ],
//         max_tokens: 2000,
//         temperature: 0.2
//     });
 
//     const text = response.choices[0].message.content.trim();
//     return text;
// }
 
// module.exports = { compareData };
 
// // test/compareDataTest.js
// // const { readExcelFile } = require('../readExcel');
// // const { compareData } = require('../compareData');
 
// module.exports = {
//     'Compare Data Test': async function(browser) {
//         const data1 = readExcelFile('C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/FIle/File1.xlsx');
//         const data2 = readExcelFile('C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/FIle/File2.xlsx');
 
//         const comparisonResult = await compareData(data1, data2);
 
//         console.log('Comparison Result:', comparisonResult);
 
//         // Example assertion
//         // browser.assert.ok(comparisonResult.includes('percentage'), 'Comparison result contains percentage');
//     }
// };
//
 






const XLSX = require('xlsx');
 
// Function to read the Excel file
function readExcelFile(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet);
}
 
module.exports = { readExcelFile };
const { OpenAI } = require('openai');
 
// Initialize OpenAI with your API key
const openai = new OpenAI({
    apiKey: ''  // Ensure you have set your API key
});
 
async function compareData(data1, data2) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content: "You are an AI assistant specialized in comparing datasets. Determine whether the datasets match and provide a percentage of similarity. You will compare the data for meaning and semantic similarity and not for an exact match."
            },
            {
                role: "user",
                content: `Compare the following two datasets and determine if they match and the percentage of similarity and give detailed information.
                Dataset 1: ${JSON.stringify(data1)}
                Dataset 2: ${JSON.stringify(data2)}`
            }
        ],
        max_tokens: 2000,
        temperature: 0.2
    });
 
    const text = response.choices[0].message.content.trim();
    return text;
}
 
module.exports = { compareData };
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
 
const filePath1 = 'C:/Users/User/Downloads/john.pdf';
 
async function makeApiRequest() {
    const filePath = path.join(__dirname, filePath1);
    console.log('Resolved file path:', filePath);  // Debugging line to check path
 
    const form = new FormData();
    form.append('resume', fs.createReadStream(filePath1));
 
    try {
        const response = await axios.post('http://192.168.1.35:3000/upload', form, {
            headers: form.getHeaders()
        });
 
        if (response.status === 200) {
            return response.data; // Return the API response data
        } else {
            console.error('API request failed with status:', response.status);
        }
    } catch (error) {
        console.error('Error during API request:', error.response ? error.response.data : error.message);
    }
}
 
module.exports = { makeApiRequest };
// const { compareData } = require('./compareData');
// const { makeApiRequest } = require('./apiTest');
 
(async function() {
    try {
        // Fetch data from API
        const apiData = await makeApiRequest();
        if (!apiData) {
            console.error('No data available from API response.');
            return;
        }
 
        // Read data from Excel
        const excelData = readExcelFile('C:/Users/User/Desktop/Resumedata.xlsx');
 
        // Compare data
        const comparisonResult = await compareData(excelData, apiData);
 
        // Display result
        console.log('Comparison Result:', comparisonResult);
    } catch (error) {
        console.error('Error during comparison:', error.message);
    }
})();
 
