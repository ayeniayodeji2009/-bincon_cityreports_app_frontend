// Firebase Realtime Database for incident submission and retrieval

const database = firebase.database();

async function submitIncident(incidentData) {
  try {
    const incidentsRef = database.ref('incidents');
    await incidentsRef.push(incidentData);
    return { success: true, message: 'Incident submitted successfully.' };
  } catch (error) {
    return { success: false, message: 'Error submitting incident: ' + error.message };
  }
}

async function fetchIncidents() {
  try {
    const incidentsRef = database.ref('incidents');
    const snapshot = await incidentsRef.once('value');
    return { success: true, data: snapshot.val() };
  } catch (error) {
    return { success: false, message: 'Error fetching incidents: ' + error.message };
  }
}






// const database = firebase.database();

// function submitIncident(incidentData) {
//   const incidentsRef = database.ref('incidents');
//   return incidentsRef.push(incidentData);
// }

// function fetchIncidents() {
//   const incidentsRef = database.ref('incidents');
//   return incidentsRef.once('value');
// }
