## Mail Server

This code creates a local SMTP server on port 2525.

The server allows anonymous connections (authOptional is true) and logs
all incoming mail data to the console when an email is received.

It also allows authentication and connection requests, and responds
with success (true) to both.

The server logs any errors to the console.