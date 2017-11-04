module.exports = AppTwitter

function AppTwitter(app, passport, AppTwitterStrategy) {

    passport.use(new AppTwitterStrategy({
            consumerKey: consumerKey,
            consumerSecret: consumerSecret
        }, (token, tokenSecret, profile, done)=>{
            console.log(token)
            console.log(tokenSecret)
            console.log(profile)
            done(null, profile)
        }
    ));

    app.get('/auth/twitter/token', passport.authenticate('twitter-token'), (req, res)=>{
            console.log('asdf')
            console.log(req.param('oauth_token'))
            console.log(req.param('oauth_token_secret'))
            res.send(req.user);
        }
    );
}