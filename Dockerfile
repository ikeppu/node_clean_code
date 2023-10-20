# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application's source code to the working directory
COPY . .

# Expose a port that your application will listen on
EXPOSE 3000

# Define the command to start your application
CMD [ "node", "index.js" ]