module.exports = {
    'Scénario 1: Envoyer un feedback valide': (browser) => {
        browser
            .url('http://127.0.0.1:9090/feedback') // Remplacez par l'URL de votre application
            .waitForElementVisible('body', 1000)
            .execute('document.querySelector("form").scrollIntoView();')
            .pause(500)
            .setValue('input[name="name"]', 'Jean Dupont') // Remplir le champ "name"
            .setValue('textarea[name="message"]', 'Excellent service!') // Remplir le champ "message"
            .click('button[type="submit"]') // Cliquer sur le bouton "Envoyer"
            .pause(2000)
            .assert.containsText('.card-header', 'Jean Dupont')
            .assert.containsText('.blockquote p', 'Excellent service!')
            .end();
    },

    'Scénario 2: Envoyer un feedback avec un champ vide': (browser) => {
        browser
            .url('http://127.0.0.1:9090/feedback') // Remplacez par l'URL de votre application
            .waitForElementVisible('body', 1000)
            .execute('document.querySelector("form").scrollIntoView();')
            .pause(500)
            .clearValue('input[name="name"]') // Laisser le champ "name" vide
            .setValue('textarea[name="message"]', 'Message sans nom') // Remplir le champ "message"
            .click('button[type="submit"]') // Cliquer sur le bouton "Envoyer"
            .assert.attributeContains('input[name="name"]', 'required', 'true')
            .end();
    },
};
