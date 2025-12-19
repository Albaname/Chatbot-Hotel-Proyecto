function botLogic(input) {
  const m = input.toLowerCase();
  if (m.includes("habitacion")) return "Tenemos Suites, Estándar y Familiares.";
  if (m.includes("wifi") || m.includes("parking"))
    return "Wifi gratis y parking por 15€/día.";
  if (m.includes("persona") || m.includes("recepcion"))
    return "Transfiriendo a un agente... Llame al +34 900 000 000.";
  return "Lo siento, no entiendo. ¿Quieres ver 'Servicios' o 'Habitaciones'?";
}
/*Funcion para guardar en Google Sheets*/
function guardarEnSheets(preguntaUser, respuestaBot) {
  const urlGoogle =
    "https://script.google.com/macros/s/AKfycbwxJVoMDY8ZbYLbyrJWZj9oCl0ZEGXmSIPdCkKi8Lzb7KnlGOPRPSg_5HT9cm126re8BQ/exec";
  fetch(urlGoogle, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pregunta: preguntaUser,
      respuesta: respuestaBot,
    }),
  })
    .then(() => console.log("Datos guardados en Google Sheets"))
    .catch((error) =>
      console.error("Error al guardar en Google Sheets:", error)
    );
}
const r = responder(m.toLowerCase());
addMsg(r, "bot");
guardarEnSheets(m, r);
