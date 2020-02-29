import socketio

sio = socketio.Client()

sio.connect('http://localhost:3000')


@sio.on('chat message')
def on_message(data):
    print(data)
