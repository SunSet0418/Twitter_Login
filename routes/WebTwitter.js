module.exports = WebTwitter

function WebTwitter(app, passport, WebTwitterStrategy) {

    passport.use(new WebTwitterStrategy({
            consumerKey: consumerKey,
            consumerSecret: consumerSecret,
            callbackURL: "/auth/twitter/callback"
        },
        function(token, tokenSecret, profile, done) {
            console.log('===='+token)
            console.log('==='+profile)
            console.log(tokenSecret)
            done(null, profile)
        }
    ));

    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect: '/',
            failureRedirect: '/login'
        }));

    app.get('/', (req, res)=>{
        res.send('Success')
    })

    app.get('/login', (req, res)=>{
        res.send('Fail')
    })

}
