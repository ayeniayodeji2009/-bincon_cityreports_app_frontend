
// var app = {
//   initialize: function() {
//       document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
//   },

//   onDeviceReady: function() {
//       this.receivedEvent('deviceready');
      
//       // Your fetch code goes here
//       fetch('http://localhost:8000/.')
//           .then(response => {
//               if (!response.ok) {
//                   throw new Error('Network response was not ok');
//               }
//               return response.json();
//           })
//           .then(data => console.log(data))
//           .catch(error => console.error('There has been a problem with your fetch operation:', error));
//   },

//   receivedEvent: function(id) {
//       console.log('Received Event: ' + id);
//   }
// };

// app.initialize();






// fetch('http://localhost:8000/')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('There has been a problem with your fetch operation:', error));





// RESTful API Data from newsapi.org
const apiKey = '32d28a2f12e64e0898f77ca7ed7b5b43';
let page = 2;

async function fetchNews(page) {
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error('Error fetching news:', error);
  }
}

async function displayNews(page) {
  const newsList = document.getElementById('newsList');
  const articles = await fetchNews(page);

  articles.forEach(article => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<div><a href=${article.urlToImage} target="_blank"><img class='img' src=${article.urlToImage} alt=${article.title} width=100% height=100%/></a></div><div><h3>${article.title}</h3><span>${article.description} <a href=${article.url}>  ...Read Story</a></span><div>`;
    newsList.appendChild(listItem);
  });
}


document.getElementById('myButton').addEventListener('click', loadMore);

function loadMore() {
  page++;
  displayNews(page);
}

// Initial load
displayNews(page);





// app.js
//alert('Hello World !!!')
// Code for incident submission
// const wordpressAPIEndpoint = 'https://cityreporters.000webhostapp.com/wp-json/wp/v2';

// function showIncidentForm() {
//   document.getElementById('incidentForm').style.display = 'block';
// }

// function submitIncident() {
//   const title = document.getElementById('incidentTitle').value;
//   const description = document.getElementById('incidentDescription').value;

//   const newIncident = {
//     title: title,
//     content: description,
//     status: 'publish'
//   };

//   // Send a POST request to WordPress to create a new incident (post)
//   fetch(wordpressAPIEndpoint, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer YOUR_WP_API_TOKEN'
//     },
//     body: JSON.stringify(newIncident)
//   })
//   .then(response => response.json())
//   .then(data => {
//     alert('Incident submitted successfully!');
//     document.getElementById('incidentForm').style.display = 'none';
//     // Refresh the incident list
//     fetchIncidents();
//   })
//   .catch(error => console.error('Error submitting incident:', error));
// }

// function fetchIncidents() {
//   // Fetch incidents from WordPress
//   fetch(wordpressAPIEndpoint)
//   .then(response => response.json())
//   .then(data => {
//     const incidentListView = document.getElementById('incidentListView');

//     console.log(incidentListView)

//     incidentListView.innerHTML = ''; // Clear previous incidents

//     data.forEach(incident => {
//       const li = document.createElement('li');
//       li.textContent = incident.title.rendered;
//       incidentListView.appendChild(li);
//     });
//   })
//   .catch(error => console.error('Error fetching incidents:', error));
// }




  // app.js    // wordpress integration

// function submitIncident(title, description, category, location, images) {
//     const post = {
//       title: title,
//       content: description,
//       status: 'publish',
//       categories: [category],
//       custom_fields: {
//         'location': location,
//         'images': images
//       }
//     };
  
//     // Send a POST request to WordPress API to create a new post (incident)
//     fetch('https://yourwordpresssite.com/wp-json/wp/v2/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer YOUR_WP_API_TOKEN'
//       },
//       body: JSON.stringify(post)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Incident submitted:', data);
//       // Implement UI update or redirection after successful submission
//     })
//     .catch(error => console.error('Error submitting incident:', error));
//   }
  











//window.location.reload(true);

//alert('Hello Android');


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
// document.addEventListener('deviceready', onDeviceReady, false);

// function onDeviceReady() {
//     // Cordova is now initialized. Have fun!

//     console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
//     document.getElementById('deviceready').classList.add('ready');
// }
















// <!DOCTYPE html>
// <!--
//     Licensed to the Apache Software Foundation (ASF) under one
//     or more contributor license agreements.  See the NOTICE file
//     distributed with this work for additional information
//     regarding copyright ownership.  The ASF licenses this file
//     to you under the Apache License, Version 2.0 (the
//     "License"); you may not use this file except in compliance
//     with the License.  You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

//     Unless required by applicable law or agreed to in writing,
//     software distributed under the License is distributed on an
//     "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
//      KIND, either express or implied.  See the License for the
//     specific language governing permissions and limitations
//     under the License.
// -->
// <html>
//     <head>
//         <meta charset="utf-8">
//         <!--
//         Customize this policy to fit your own app's needs. For more guidance, please refer to the docs:
//             https://cordova.apache.org/docs/en/latest/
//         Some notes:
//             * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
//             * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
//                 * Enable inline JS: add 'unsafe-inline' to default-src
//         -->
//         <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
//         <meta name="format-detection" content="telephone=no">
//         <meta name="msapplication-tap-highlight" content="no">
//         <meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
//         <meta name="color-scheme" content="light dark">
//         <link rel="stylesheet" href="css/index.css">
//         <title>Hello World</title>
//     </head>
//     <body>
//         <div class="app">
//             <h1>Apache Cordova</h1>
//             <div id="deviceready" class="blink">
//                 <p class="event listening">Connecting to Device</p>
//                 <p class="event received">Device is Ready</p>
//                 <h1>Ready to change the world</h1>
//                 <h2> What !!! </h2>
//             </div>
//         </div>
//         <script src="cordova.js"></script>
//         <script src="./js/index.js"></script>
//     </body>
// </html>
