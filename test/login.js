module.exports = {
    '@tags': ['login'],

    'Scénario 1: Authentification valide et accès à /admin': function (browser) {
        browser
            .url('http://127.0.0.1:9090/login') // Ouvrir la page de login
            .setValue('input[name="name"]', 'admin') // Entrer un login valide
            .setValue('input[name="password"]', 'admin') // Entrer un mot de passe valide
            .click('button[type="submit"]') // Cliquer sur le bouton "Envoyer"
            .waitForElementVisible('body', 5000) // Attendre que la page suivante charge
            .assert.urlEquals('http://127.0.0.1:9090/admin') // Vérifier que l'URL est correcte
            .end();
    },

    'Scénario 2: Authentification non valide (mauvais compte)': function (browser) {
        browser
            .url('http://127.0.0.1:9090/login') // Ouvrir la page de login
            .setValue('input[name="name"]', 'invalid_user') // Entrer un login incorrect
            .setValue('input[name="password"]', 'wrong_password') // Entrer un mot de passe incorrect
            .click('button[type="submit"]') // Cliquer sur le bouton "Envoyer"
            .pause(2000) // Attendre un court moment
            .assert.urlEquals('http://127.0.0.1:9090/login') // Vérifier qu'on reste sur la page de login
            .end();
    },

    'Scénario 3: Champs vides (login et mot de passe requis)': function (browser) {
        browser
            .url('http://127.0.0.1:9090/login') // Ouvrir la page de login
            .setValue('input[name="name"]', '') // Laisser le champ login vide
            .setValue('input[name="password"]', '') // Laisser le champ mot de passe vide
            .click('button[type="submit"]') // Cliquer sur le bouton "Envoyer"
            .assert.attributeContains('input[name="name"]', 'required', 'true') // Vérifier que le champ login est requis
            .assert.attributeContains('input[name="password"]', 'required', 'true') // Vérifier que le champ mot de passe est requis
            .end();
    },
};
