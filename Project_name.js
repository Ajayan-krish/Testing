module.exports = {
    'module1' : function(browser){
    const email = 'test@test.com';
    const password = 'Qwerty@123';
    const PN = 'Xyz Website';
    const SD = '02/02/2024';
    const ED = '04/11/2024';
browser
      .url ('https://demo.lcp.neartekpod.io/')
      .maximizeWindow()
      .useXpath()
      .setValue('//*[@id="username"]', email).pause(2000)
      .setValue('//*[@id="password"]', password)
      .click("//button[text()='Continue']")
      .click("//a[text()='Project']") .pause(2000)
      .click("//a[text()='Projects']") .pause(5000)
      .click("//a[text()='Add New Project']") .pause(2000)
      .setValue("//input[@placeholder='Project name']",PN)
      .setValue("//input[@placeholder='Start Date']",SD)
      .setValue("//input[@placeholder='Planned End Date']",ED).pause(2000)
      .click("//button[text()='Submit']").pause(10000)
      .saveScreenshot('C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/Screenshots/project.png')
      

    }
}