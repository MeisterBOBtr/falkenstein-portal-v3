"use strict";

// ==========================================
// FALKENSTEIN PORTAL V3
// AUTHENTIFIZIERUNG
// ==========================================

const Auth = {

    async register() {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const passwordConfirm =
            document.getElementById("passwordConfirm").value;

        const minecraftName =
            document.getElementById("minecraftName").value.trim();

        const discordName =
            document.getElementById("discordName").value.trim();

        const message = document.getElementById("message");

        if (password !== passwordConfirm) {
            message.textContent = "❌ Die Passwörter stimmen nicht überein.";
            return;
        }

        if (password.length < 6) {
            message.textContent =
                "❌ Das Passwort muss mindestens 6 Zeichen lang sein.";
            return;
        }

        message.textContent = "⏳ Registrierung wird durchgeführt...";

        const { data, error } =
            await window.falkensteinSupabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        minecraft_name: minecraftName,
                        discord_name: discordName
                    }
                }
            });

        if (error) {
            console.error(error);
            message.textContent =
                "❌ Registrierung fehlgeschlagen: " + error.message;
            return;
        }

        if (data.user) {
            message.textContent =
                "✅ Registrierung erfolgreich! Bitte bestätige deine E-Mail-Adresse.";
        }
    }
};


// ==========================================
// REGISTRIERUNGSFORMULAR
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        await Auth.register();
    });

});


// Global verfügbar machen
window.FalkensteinAuth = Auth;
