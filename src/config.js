export const firebaseConfig = {
  apiKey: "AIzaSyBSEx2-ykPTb70keLZh3LAuDtQT2VyCsco",
  authDomain: "evencloud-26d32.firebaseapp.com",
  databaseURL: "https://evencloud-26d32.firebaseio.com",
  projectId: "evencloud-26d32",
  storageBucket: "evencloud-26d32.appspot.com",
  messagingSenderId: "599725599274",
  appId: "1:599725599274:web:8f9a716ca577fc72a1f153",
  measurementId: "G-VSJNQ5LYK5"
};

export const cognitoConfig = {
  userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
  clientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID
};

export const auth0Config = {
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN
};

export const mapConfig = process.env.REACT_APP_MAP_MAPBOX;
export const googleAnalyticsConfig = process.env.REACT_APP_GA_MEASUREMENT_ID;
