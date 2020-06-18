module.exports = {
  Test(browser) {
    browser
      .url('http://localhost:3000/dev/hello')
      .waitForElementVisible('body')
      .clearValue('body > form > input[type=number]:nth-child(1)')
      .pause(1000)
      .clearValue('body > form > input[type=number]:nth-child(3)')
      .pause(1000)

      .setValue('body > form > input[type=number]:nth-child(1)', '2')
      .pause(1000)
      .setValue('body > form > select', '+')
      .pause(1000)
      .setValue('body > form > input[type=number]:nth-child(3)', '41')
      .pause(1000)
      .click('body > form > input[type=submit]:nth-child(4)')
      .pause(1000)
      .assert.containsText('#answer', '43')
      .pause(1000)

      .clearValue('body > form > input[type=number]:nth-child(1)')
      .pause(1000)
      .clearValue('body > form > input[type=number]:nth-child(3)')
      .pause(1000)

      .setValue('body > form > input[type=number]:nth-child(1)', '1')
      .pause(1000)
      .setValue('body > form > select', '-')
      .pause(1000)
      .setValue('body > form > input[type=number]:nth-child(3)', '3')
      .pause(1000)
      .click('body > form > input[type=submit]:nth-child(4)')
      .pause(1000)
      .assert.containsText('#answer', '-2')
      .pause(1000)

      .clearValue('body > form > input[type=number]:nth-child(1)')
      .pause(1000)
      .clearValue('body > form > input[type=number]:nth-child(3)')
      .pause(1000)

      .setValue('body > form > input[type=number]:nth-child(1)', '6')
      .pause(1000)
      .setValue('body > form > select', '/')
      .pause(1000)
      .setValue('body > form > input[type=number]:nth-child(3)', '2')
      .pause(1000)
      .click('body > form > input[type=submit]:nth-child(4)')
      .pause(1000)
      .assert.containsText('#answer', '3')
      .pause(1000)

      .clearValue('body > form > input[type=number]:nth-child(1)')
      .pause(1000)
      .clearValue('body > form > input[type=number]:nth-child(3)')
      .pause(1000)

      .setValue('body > form > input[type=number]:nth-child(1)', '100')
      .pause(1000)
      .setValue('body > form > select', '*')
      .pause(1000)
      .setValue('body > form > input[type=number]:nth-child(3)', '3')
      .pause(1000)
      .click('body > form > input[type=submit]:nth-child(4)')
      .pause(1000)
      .assert.containsText('#answer', '300')
      .pause(1000)

      .clearValue('body > form > input[type=number]:nth-child(1)')
      .pause(1000)
      .clearValue('body > form > input[type=number]:nth-child(3)')
      .pause(1000)

      .setValue('body > form > input[type=number]:nth-child(1)', '10')
      .pause(1000)
      .setValue('body > form > select', '>')
      .pause(1000)
      .setValue('body > form > input[type=number]:nth-child(3)', '5')
      .pause(1000)
      .click('body > form > input[type=submit]:nth-child(4)')
      .pause(1000)
      .assert.containsText('#answer', 'true')
      .pause(1000)

      .clearValue('body > form > input[type=number]:nth-child(1)')
      .pause(1000)
      .clearValue('body > form > input[type=number]:nth-child(3)')
      .pause(1000)

      .setValue('body > form > input[type=number]:nth-child(1)', '100')
      .pause(1000)
      .setValue('body > form > select', '>=')
      .pause(1000)
      .setValue('body > form > input[type=number]:nth-child(3)', '100')
      .pause(1000)
      .click('body > form > input[type=submit]:nth-child(4)')
      .pause(1000)
      .assert.containsText('#answer', 'true')
      .pause(1000)

      .clearValue('body > form > input[type=number]:nth-child(1)')
      .pause(1000)
      .clearValue('body > form > input[type=number]:nth-child(3)')
      .pause(1000)

      .setValue('body > form > input[type=number]:nth-child(1)', '100')
      .pause(1000)
      .setValue('body > form > select', '=')
      .pause(1000)
      .setValue('body > form > input[type=number]:nth-child(3)', '100')
      .pause(1000)
      .click('body > form > input[type=submit]:nth-child(4)')
      .pause(1000)
      .assert.containsText('#answer', 'true')
      .pause(1000)

      .clearValue('body > form > input[type=number]:nth-child(1)')
      .pause(1000)
      .clearValue('body > form > input[type=number]:nth-child(3)')
      .pause(1000)

      .setValue('body > form > input[type=number]:nth-child(1)', '100')
      .pause(1000)
      .setValue('body > form > select', '<=')
      .pause(1000)
      .setValue('body > form > input[type=number]:nth-child(3)', '99')
      .pause(1000)
      .click('body > form > input[type=submit]:nth-child(4)')
      .pause(1000)
      .assert.containsText('#answer', 'false')
      .pause(1000)

      .clearValue('body > form > input[type=number]:nth-child(1)')
      .pause(1000)
      .clearValue('body > form > input[type=number]:nth-child(3)')
      .pause(1000)

      .setValue('body > form > input[type=number]:nth-child(1)', '100')
      .pause(1000)
      .setValue('body > form > select', '<')
      .pause(1000)
      .setValue('body > form > input[type=number]:nth-child(3)', '101')
      .pause(1000)
      .click('body > form > input[type=submit]:nth-child(4)')
      .pause(1000)
      .assert.containsText('#answer', 'true')
      .pause(1000);
  },
};