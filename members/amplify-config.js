// Replace the values below with your actual Cognito User Pool and App Client details
window.amplifyConfig = {
    Auth: {
        region: 'eu-north-1',
        userPoolId: 'eu-north-1_r6S1QVUAE', // <-- Replace with your User Pool ID
        userPoolWebClientId: '4g3fu4rvqb1e36gu6fcr26uagh', // <-- Replace with your App Client ID
        oauth: {
            domain: 'https://eu-north-1r6s1qvuae.auth.eu-north-1.amazoncognito.com',
            scope: ['email', 'openid', 'phone'],
            redirectSignIn: 'https://www.encorewales.co.uk/members/confirm.html',
            redirectSignOut: 'https://www.encorewales.co.uk/members/index.html',
            responseType: 'code'
        }
    }
};
