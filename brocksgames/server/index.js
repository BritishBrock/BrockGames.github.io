import io from 'socket.io-client';
var socket = io('http:localhost:9000');
socket.emit('news', {hello: 'world'});