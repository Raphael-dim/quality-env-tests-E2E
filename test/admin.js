module.exports = {
    'Scénario 1: Affichage de la liste des contacts pour un administrateur authentifié': function (browser) {
        browser
            .url('http://127.0.0.1:9090/login')
            .setValue('input[name="name"]', 'admin')
            .setValue('input[name="password"]', 'admin')
            .click('button[type="submit"]')
            .waitForElementVisible('.container', 5000)
            
            .assert.urlEquals('http://127.0.0.1:9090/admin')
            .waitForElementVisible('table.table', 10000)
            .assert.elementPresent('table.table thead')
            .assert.elementPresent('table.table tbody')
            .assert.containsText('table.table thead', 'dates')
            .assert.containsText('table.table thead', 'authors')
            .assert.containsText('table.table thead', 'messages')
        
            .assert.containsText('table', 'Jean Louis') // Vérifie qu'un contact avec le nom "Jean Louis" est affiché
            .assert.containsText('table', 'Bonjour, je souhaite des informations.') // Vérifie qu'un message est présent
            .end();
    },

    // 'Scénario 2: Suppression d’un contact': function (browser) {
    //     browser
    //         .url('http://127.0.0.1:9090/admin')
    //         .setCookie('token', 'votre_token_valide')  // Ajouter un token valide dans les cookies
    //         .waitForElementVisible('table', 2000)
    //         .click('button[data-id="contact_id_exemple"]')  // Simule un clic sur le bouton "delete" du contact avec un ID spécifique
    //         .pause(2000) // Attendre que la page soit rechargée
    //         .waitForElementNotPresent('button[data-id="contact_id_exemple"]', 2000)  // Vérifie que le contact supprimé n'est plus affiché
    //         .end();
    // },

    'Scénario 3: Déconnexion de l’administrateur': function (browser) {
        browser
            .url('http://127.0.0.1:9090/login')
            .setValue('input[name="name"]', 'admin')
            .setValue('input[name="password"]', 'admin')
            .click('button[type="submit"]')
            .waitForElementVisible('.container', 5000)
            .click('.disconnected') // Simule un clic sur le bouton de déconnexion
            .pause(1000)
            .assert.urlEquals('http://127.0.0.1:9090/login') // Vérifie que l'utilisateur a été redirigé vers la page de connexion
            .end();
    },

    'Scénario 4: Accès à la page admin sans authentification': function (browser) {
        browser
            .url('http://127.0.0.1:9090/admin')
            .waitForElementVisible('body', 2000)
            .assert.urlEquals('http://127.0.0.1:9090/login') // Vérifie que l'utilisateur a été redirigé vers la page de connexion
            .end();
    },
};
