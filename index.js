const app = require('express')();

app.get('/ping', (req, res) => {
    res.status(200).json({
        pong: '🏓',
    });
});

app.get('/coconut', (req, res) => {
    res.status(200).json({
        'coconut':'🥥'
    })
})

app.use('*', (req, res) => {
    res.status(404).json({
        message: 'page not found, have some coconut',
        '🥥': '🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥'
    });
});

app.listen(3699, _=> {
    console.log('Listening on Port: 3699')
});