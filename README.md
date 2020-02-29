socketio-chat

---

**Tutorial found on: https://socket.io/get-started/chat/**

---

**CHECK IF NODE JS IS INSTALLED:**  
 node --version  
 v12.14.0
...ok

**CREATE package.json AS DESCRIBED IN THE TUTORIAL**

**INSTALL EXPRESS USING NPM**  
 npm install express@4.15.2

**CREATE index.js AS DESCRIBED IN THE TUTORIAL**

...Socket.IO (and websocket) require a HTTP server vor the initial handshake.

**RUN index.js**  
 node index.js  
 ...works

**CREATE index.html and UPDATE index.js AS DESCRIBED**

**INSTALL Socket.IO**  
 npm install socket.io  
 ...dependencies automatically added to package.json  
 ...update files  
 ...works  
 ...tutorial completed to "a user connected"...

**CHAPTER EMITTING EVENTS COMPLETED**

**CHAPTER BROADCASTING**

**USED "socket.broadcast.emit" instead of "io.emit" TO NOT SEND TO THE EMITTING SOCKET**

**TUTORIAL SUCCESSFULLY COMPLETED !**

---

**CONNECT TO THE CHAT USING A PYTHON SCRIPT**

    pip install "python-socketio[client]"
    add following line to .vscode/settings.json:
    "python.pythonPath": "/usr/bin/python",
