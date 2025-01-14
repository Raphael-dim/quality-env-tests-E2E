module.exports = {
    'Scénario 1: Soumission d\'un formulaire de contact valide': function (browser) {
        browser
            .url('http://127.0.0.1:9090/contact')
            .setValue('input[name="firstName"]', 'Jean')
            .setValue('input[name="lastName"]', 'Louis')
            .setValue('input[name="mobilePhone"]', '0610203040')
            .setValue('input[name="email"]', 'jean.louis@email.com')
            .setValue('input[name="arrivedAt"]', '2025-01-01')
            .setValue('input[name="departureAt"]', '2025-01-10')
            .setValue('textarea[name="message"]', 'Bonjour, je souhaite des informations.')


            .execute('document.querySelector("button[type=\'submit\']").scrollIntoView(true);')
            .pause(500)

            .click('button[type="submit"]')
            .pause(2000)

            .assert.valueEquals('input[name="firstName"]', '')
            .assert.valueEquals('input[name="lastName"]', '')
            .assert.valueEquals('input[name="mobilePhone"]', '')
            .assert.valueEquals('input[name="email"]', '')
            .assert.valueEquals('input[name="arrivedAt"]', '')
            .assert.valueEquals('input[name="departureAt"]', '')
            .assert.valueEquals('textarea[name="message"]', '')
            .end();
    },

    'Scénario 2: Champs vides': function (browser) {
        browser
            .url('http://127.0.0.1:9090/contact') // Ouvrir la page de login
            .execute('document.querySelector("button[type=\'submit\']").scrollIntoView(true);')
            .pause(500)
            .click('button[type="submit"]')

            .assert.attributeContains('input[name="firstName"]', 'required', 'true')
            .assert.attributeContains('input[name="lastName"]', 'required', 'true')
            .assert.attributeContains('input[name="mobilePhone"]', 'required', 'true')
            .assert.attributeContains('input[name="email"]', 'required', 'true')
            .assert.attributeContains('input[name="arrivedAt"]', 'required', 'true')
            .assert.attributeContains('input[name="departureAt"]', 'required', 'true');
    },
};

