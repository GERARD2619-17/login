const ngrok = require('ngrok');

// Inicia una conexión a Ngrok
async function startNgrok() {
  try {
    const url = await ngrok.connect(4040); // Reemplaza 3000 con el puerto de tu servidor local
    console.log('Tunnel a tu servidor local:', url);
  } catch (error) {
    console.error('Error al iniciar Ngrok:', error);
  }
}

// Cierra la conexión a Ngrok cuando el proceso Node.js se detiene
process.on('SIGINT', () => {
  ngrok.disconnect();
  process.exit();
});

startNgrok();
