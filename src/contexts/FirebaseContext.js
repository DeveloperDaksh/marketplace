import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '../config';

// ----------------------------------------------------------------------

const ADMIN_EMAILS = ['demo@minimals.cc'];

/*

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const database = getDatabase() */
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app);

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const reducer = (state, action) => {
  if (action.type === 'INITIALISE') {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  }

  return state;
};

const AuthContext = createContext({
  ...initialState,
  method: 'firebase',
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  loginWithGoogle: () => Promise.resolve(),
  loginWithFaceBook: () => Promise.resolve(),
  loginWithTwitter: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

AuthProvider.propTypes = {
  children: PropTypes.node
};

function AuthProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () =>
      onAuthStateChanged((user) => {
        if (user) {
          const docRef = doc(db, 'users', user.uid);

          getDoc(docRef).then((doc) => {
            if (doc.exists) {
              setProfile(doc.data());
            }
          }).catch((error) => {
            console.error(error);
          });

          dispatch({
            type: 'INITIALISE',
            payload: { isAuthenticated: true, user }
          });
        } else {
          dispatch({
            type: 'INITIALISE',
            payload: { isAuthenticated: false, user: null }
          });
        }
      }),
    [dispatch]
  );

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const loginWithGoogle = () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // return firebase.auth().signInWithPopup(provider);
  };

  const loginWithFaceBook = () => {
    // const provider = new firebase.auth.FacebookAuthProvider();
    // return firebase.auth().signInWithPopup(provider);
  };

  const loginWithTwitter = () => {
    // const provider = new firebase.auth.TwitterAuthProvider();
    // return firebase.auth().signInWithPopup(provider);
  };

  const register = (email, password, username, category) => createUserWithEmailAndPassword(auth, email, password).then((res) => {
    const user = res.user;
    addDoc(collection(db, "users"), {
      uid: user.uid,
      email,
      username,
      category
    });
  });

  const logout = async () => {
    // await firebase.auth().signOut();
  };

  const resetPassword = async (email) => {
    // await firebase.auth().sendPasswordResetEmail(email);
  };

  const Auth = { ...state.user };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'firebase',
        user: {
          id: Auth.uid,
          email: Auth.email,
          photoURL: Auth.photoURL || profile?.photoURL,
          displayName: Auth.displayName || profile?.displayName,
          role: ADMIN_EMAILS.includes(Auth.email) ? 'admin' : 'user',
          phoneNumber: Auth.phoneNumber || profile?.phoneNumber || '',
          country: profile?.country || '',
          address: profile?.address || '',
          state: profile?.state || '',
          city: profile?.city || '',
          zipCode: profile?.zipCode || '',
          about: profile?.about || '',
          isPublic: profile?.isPublic || false
        },
        login,
        register,
        loginWithGoogle,
        loginWithFaceBook,
        loginWithTwitter,
        logout,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
