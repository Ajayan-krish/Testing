module.exports = {
    'Bill Extraction Data Comparison Test': function (browser) {
      const originalData = {
        RestaurantName: 'NOVOTEL',
        date: '14/03/2024',
        Totalamount: '545.70',
        city: 'L3 Piano KP ApartmenrCH-100India'
        
      };
      const filePath = require('path').resolve(__dirname + 'C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/FIle/1722590860823-receipt2.jpg'); // Replace with the actual file path
      const email = 'test@test.com';
      const password = 'Qwerty@123';
      browser
      .url ('https://demo.lcp.neartekpod.io/')
      .maximizeWindow()
      .useXpath()
      .setValue('//*[@id="username"]', email).pause(2000)
      .setValue('//*[@id="password"]', password)
      .click("//button[text()='Continue']")
      .click("//a[text()='Expense']")
      .click("//a[text()='Expenses']")
      .click("//a[text()='Add New']")
      .click("/html/body/div[1]/div[2]/main/div/div/div/div/div[2]/label",filePath).pause(5000)
      //.setValue('', filePath)
      

        // .getText('//xpath_to_date', function(result) {
        //   brow
        // .getText('//xpath_to_invoice_number', function(result) {
        //   browser.assert.equal(result.value, originalData.invoiceNumber, 'Invoice number matches');
        // })ser.assert.equal(result.value, originalData.date, 'Date matches');
        // })
        // .getText('//xpath_to_amount', function(result) {
        //   browser.assert.equal(result.value, originalData.amount, 'Amount matches');
        // })
        // .getText('//xpath_to_customer_name', function(result) {
        //   browser.assert.equal(result.value, originalData.customerName, 'Customer name matches');
        // })
  
        // Add more fields as necessaryC:\Users\ajaya\Documents\NightWatch\Lcp_Demo\Expences\Expence.js
  
        .end();  // End the session
    }
  };
  