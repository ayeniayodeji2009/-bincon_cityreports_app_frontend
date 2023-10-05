// Geolocation functions  

  function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => resolve(position),
          error => reject(new Error('Geolocation error: ' + error.message))
        );
      } else {
        reject(new Error('Geolocation not supported'));
      }
    });
  }
  



// function getCurrentLocation() {
//     return new Promise((resolve, reject) => {
//       if ('geolocation' in navigator) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//       } else {
//         reject(new Error('Geolocation not supported'));
//       }
//     });
//   }
