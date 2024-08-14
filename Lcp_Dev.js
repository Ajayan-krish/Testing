module.exports = {
    'module1' : function(browser){
    const email = 'test@test.com';
    const password = 'Qwerty@123';
    const Name = 'Git';
    const description = 'To stored data';
    const Status = 'Not Working';
browser
      .url ('https://demo.lcp.neartekpod.io/')
      .maximizeWindow()
      .useXpath()
      .setValue('//*[@id="username"]', email).pause(2000)
      .setValue('//*[@id="password"]', password)
      .click("//button[text()='Continue']")
      .click("//a[text()='Project']") .pause(2000)
      .click("//a[text()='Deliverables']").pause(5000)
      .saveScreenshot('C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/Screenshots/before-Deliverables.png')
      .click("//a[text()='Add New Deliverables']")
      .setValue("//input[@placeholder='Name']",Name)
      .setValue("//input[@placeholder='Description']",description)
      .setValue("//input[@placeholder='Enter Your Status']",Status).pause(2000)
      .click("//button[text()='Submit']").pause(10000)
      .saveScreenshot('C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/Screenshots/After-Deliverables.png')




    }}