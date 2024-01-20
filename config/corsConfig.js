const allowedOrigins = [
    'https://booking-app-f4398.web.app', 
    'https://booking-app-p1l3.vercel.app', 
    'http://localhost:5173'
];

const corsConfig = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsConfig;