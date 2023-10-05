// Authentication functions using Firebase Authentication


const auth = firebase.auth();

async function signUp(email, password) {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    return { success: true, message: 'Sign up successful.' };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

async function login(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    return { success: true, message: 'Login successful.' };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

async function logout() {
  try {
    await auth.signOut();
    return { success: true, message: 'Logout successful.' };
  } catch (error) {
    return { success: false, message: error.message };
  }
}








// const auth = firebase.auth();

// function signUp(email, password) {
//   return auth.createUserWithEmailAndPassword(email, password);
// }

// function login(email, password) {
//   return auth.signInWithEmailAndPassword(email, password);
// }

// function logout() {
//   return auth.signOut();
// }
