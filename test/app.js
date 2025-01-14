module.exports = {
    'Vérification des liens de navigation': function (browser) {
        // Ouvrir la page d'accueil
        browser
            .url('http://127.0.0.1:9090')  // L'URL de votre page d'accueil
            .waitForElementVisible('body', 2000)  // S'assurer que la page est chargée

            // Vérification du lien "Localisation"
            .click('a[href="/geo"]')  // Cliquer sur le lien "Localisation"
            .waitForElementVisible('body', 2000)  // Attendre que la page se charge
            .assert.urlEquals('http://127.0.0.1:9090/geo')  // Vérifier que l'URL correspond à /geo
            .back()  // Revenir à la page précédente

            // Vérification du lien "Tarifs"
            .click('a[href="/pricing"]')  // Cliquer sur le lien "Tarifs"
            .waitForElementVisible('body', 2000)  // Attendre que la page se charge
            .assert.urlEquals('http://127.0.0.1:9090/pricing')  // Vérifier que l'URL correspond à /pricing
            .back()  // Revenir à la page précédente

            // Vérification du lien "Avis"
            .click('a[href="/feedback"]')  // Cliquer sur le lien "Avis"
            .waitForElementVisible('body', 2000)  // Attendre que la page se charge
            .assert.urlEquals('http://127.0.0.1:9090/feedback')  // Vérifier que l'URL correspond à /feedback
            .back()  // Revenir à la page précédente

            // Vérification du lien "Contactez-nous"
            .click('a[href="/contact"]')  // Cliquer sur le lien "Contactez-nous"
            .waitForElementVisible('body', 2000)  // Attendre que la page se charge
            .assert.urlEquals('http://127.0.0.1:9090/contact')  // Vérifier que l'URL correspond à /contact
            .end();  // Fin du test
    }
};
