// Firebase SDKs पहले ही login-final.html में लोड हो चुके हैं, 
// इसलिए हमें केवल कॉन्फ़िगरेशन ऑब्जेक्ट को परिभाषित करने और Firebase को इनिशियलाइज़ करने की आवश्यकता है।

const firebaseConfig = {
  apiKey: "AIzaSyABPt7F1xZgiliy4aYL0QmN1TcR6NMPgBU",
  authDomain: "kautilyapro1st-37720.firebaseapp.com",
  databaseURL: "https://kautilyapro1st-37720-default-rtdb.firebaseio.com",
  projectId: "kautilyapro1st-37720",
  storageBucket: "kautilyapro1st-37720.firebasestorage.app",
  messagingSenderId: "195587023092",
  appId: "1:195587023092:web:9fbe54170e400f227cfea1",
  measurementId: "G-QS6TXQJT6L"
};

// firebase-app-compat.js लोड होने के बाद 'firebase' ग्लोबल ऑब्जेक्ट उपलब्ध होता है।
firebase.initializeApp(firebaseConfig);

// ध्यान दें: इस सेटअप में getAnalytics() की आवश्यकता नहीं है क्योंकि यह compatibility लाइब्रेरी का हिस्सा नहीं है।
// यदि आपको Analytics की आवश्यकता है, तो आपको इसे अलग से v9 modular सिंटैक्स के साथ कॉन्फ़िगर करना होगा।
