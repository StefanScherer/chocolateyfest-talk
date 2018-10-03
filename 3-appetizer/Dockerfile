FROM chocolateyfest/node
WORKDIR /app
COPY img img
COPY package.json package.json
RUN npm install --production
COPY app.js app.js
FROM chocolateyfest/node:pure
WORKDIR /app
COPY --from=0 /app /app
EXPOSE 8080
ENTRYPOINT [ "node", "app.js" ]
