const socket = io('http://147.232.178.58:7654');
// socket.emit('authentication', {msg: 'nipple'});

// Get the canvas.


const joystick = nipplejs.create({
    zone: document.getElementById('zone_joystick'),
    mode: 'static',
    position: { right: '20%', top: '50%' },
    catchDistance: 5,
    color: 'green',
    size: 200
});


joystick.on('dir:up', () => {
    canvas.addEventListener('touchstart', function() {
        socket.emit('up', {msg: 'color'});
        console.log("up");
    });
});

// Set up an event listener for new touches.
canvas.addEventListener('touchstart', function() {
    myFunction(event);
});


joystick.on('dir:down', () => {
    socket.emit('down', {msg: 'color'});
    console.log("down");
});

joystick.on('dir:right', () => {
    socket.emit('right', {msg: 'color'});
    console.log("right");
});

joystick.on('dir:left', () => {
    socket.emit('left', {msg: 'color'});
    console.log("left");
});

joystick.on('end', () => {
    socket.emit('end', {msg: 'color'});
    console.log("pustil sa");
});



