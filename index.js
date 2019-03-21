const app = require('express')();
const port =  process.env.PORT || 3699;

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

app.listen(port , _=> {
    console.log(`Listening on Port: ${port}`)
});