  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth, onAuthStateChanged , createUserWithEmailAndPassword , signInWithEmailAndPassword ,signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



  const firebaseConfig = {
    apiKey: "AIzaSyDstu6KQ7ORwGQaoPH2z85Y0DRjj97h5hM",
    authDomain: "my-first-project-a894d.firebaseapp.com",
    projectId: "my-first-project-a894d",
    storageBucket: "my-first-project-a894d.appspot.com",
    messagingSenderId: "129049233309",
    appId: "1:129049233309:web:c3ee36913289be3abc9174",
    measurementId: "G-XF5KPJGGKL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


  const signup_email = document.getElementById("signup_email")
  const signup_password = document.getElementById("signup_password")
  const signup_btn = document.getElementById("signup_btn")
  
  const signin_email = document.getElementById("signin_email")
  const signin_password = document.getElementById("signin_password")
  const signin_btn = document.getElementById("signin_btn")
  
  const auth_container = document.getElementById("auth_container")
  const user_container = document.getElementById("user_container")

  const user_email = document.getElementById("user_email")
  const LogOut_btn = document.getElementById("LogOut_btn")


  
  signup_btn.addEventListener('click', createUserAccount);
  signin_btn.addEventListener('click',signin )
  LogOut_btn.addEventListener('click',logOut )

  

  onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("login user");
        const uid = user.uid;
        auth_container.style.display = "none"
        user_container.style.display = "block"
        user_email.innerText = user.email
        } else {
        console.log("loogout user");
        auth_container.style.display = "block"
        user_container.style.display = "none"
      }
  });
  
  function createUserAccount () {
      console.log(signup_email.value);
    console.log(signup_password.value);
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user=>",user);

    
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)

    // ..
  });

  }

function signin() {
    console.log(signin_email.value);
    console.log(signin_password.value);
    signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user=>');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
function logOut() {

    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

}
    

