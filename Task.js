module.exports = {
    'module1' : function(browser){
    const email = 'test@test.com';
    const password = 'Qwerty@123';
    const TaskName = 'Git';
    const PlanSD = 'To stored data';
    const PlanED = '04/11/2024';
    const ActualSD ='';
    const Status = '';
browser
      .url ('https://demo.lcp.neartekpod.io/')
      .maximizeWindow()
      .useXpath()
      .setValue('//*[@id="username"]', email).pause(2000)
      .setValue('//*[@id="password"]', password)
      .click("//button[text()='Continue']")
      .click("//a[text()='Project']") .pause(2000)
      .click("//a[text()='Task']").pause(5000)
      .saveScreenshot('C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/Screenshots/before-Task.png')
      .click("//a[text()='Add New Task']")
      .setValue("//input[@placeholder='Name']",TaskName)      //code not fill
      .setValue("//input[@placeholder='Description']",PlanSD) //code not fill
       . setValue("//input[@placeholder='Description']",PlanED)  //code not fill
    
      setValue("//input[@placeholder='Description']",ActualSD) // code not fill
      .setValue("//input[@placeholder='Enter Your Status']",Status).pause(2000)// code not fill
      .click("//button[text()='Submit']").pause(10000) // code not fill
      .saveScreenshot('C:/Users/ajaya/Documents/NightWatch/Lcp_Demo/Screenshots/After-Task.png')




    }}