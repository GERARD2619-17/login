const ngrok = require("@ngrok/ngrok");

(async function () {
    const listener = await ngrok.connect({
        addr: 1337,
        authtoken_from_env: true,
    });

    console.log(`Ingress established at: ${listener.url()}`);
})();
