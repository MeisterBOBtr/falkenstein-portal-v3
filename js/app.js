// ==========================================
// FALKENSTEIN PORTAL V3
// Zentrales JavaScript-System
// ==========================================

"use strict";

// ------------------------------------------
// Portal-Konfiguration
// ------------------------------------------

const FALKENSTEIN = {
    name: "Falkenstein",
    portal: "Falkenstein Portal V3",
    version: "3.0.0"
};

// ------------------------------------------
// Zentrale Portal-Funktionen
// ------------------------------------------

const Portal = {

    // Portal starten
    init() {
        console.log(
            `${FALKENSTEIN.portal} ${FALKENSTEIN.version} gestartet.`
        );

        this.checkSupabase();
        this.setupNavigation();
    },

    // Prüfen, ob Supabase verbunden ist
    checkSupabase() {
        if (window.falkensteinSupabase) {
            console.log("✓ Supabase Verbindung verfügbar");
        } else {
            console.warn(
                "⚠ Supabase Verbindung wurde noch nicht geladen."
            );
        }
    },

    // Navigation vorbereiten
    setupNavigation() {
        const links = document.querySelectorAll("[data-link]");

        links.forEach(link => {
            link.addEventListener("click", event => {
                const target = link.dataset.link;

                if (!target || target === "#") {
                    return;
                }

                event.preventDefault();
                window.location.href = target;
            });
        });
    },

    // Element sicher finden
    getElement(id) {
        return document.getElementById(id);
    },

    // Text eines Elements ändern
    setText(id, text) {
        const element = this.getElement(id);

        if (element) {
            element.textContent = text;
        }
    }
};

// ------------------------------------------
// Portal nach dem Laden der Seite starten
// ------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    Portal.init();
});

// Portal global verfügbar machen
window.FalkensteinPortal = Portal;
