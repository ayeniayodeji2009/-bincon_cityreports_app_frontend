// Image upload functions using Firebase Storage
const storage = firebase.storage();

function uploadImage(file) {
  const storageRef = storage.ref();
  const imageRef = storageRef.child('images/' + file.name);
  return imageRef.put(file);
}
