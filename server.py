import http.server
from http.server import HTTPServer, BaseHTTPRequestHandler
import socketserver

PORT = 4000

Handler = http.server.SimpleHTTPRequestHandler

Handler.extensions_map={
	'.html': 'text/html',
    '.css':	'text/css',
	'.js':	'text/javascript',
    '.png': 'image/png',
	'.jpg': 'image/jpg'
    }

httpd = socketserver.TCPServer(("", PORT), Handler)

print("Serving at http://localhost:4000")
httpd.serve_forever()

