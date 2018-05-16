import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const projects = [
{
    name: 'Cryptotracker',
    simple_desc: 'A React/Redux/Firebase application created to track 3 of the top cryptocurrencies.',
    card_image: './images/crypto-card.png'
},
{
    name: 'Simple Twitch',
    simple_desc: 'A PHP application created to simplify the Twitch.tv interface and to explore the Twitch API.',
    card_image: './images/twitch-card.png'
}
]


export { firebase, database as default }; 