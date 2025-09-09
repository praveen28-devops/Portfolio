# Stage 1: Build the React application
# This stage uses a Node.js image to install dependencies and build the static files.
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker layer caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application for production
RUN npm run build

# ---

# Stage 2: Serve the application using Nginx
# This stage uses a lightweight Nginx image to serve the built static files.
FROM nginx:1.25-alpine

# Copy the build output from the 'builder' stage to the Nginx HTML directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80, which is the default port Nginx listens on
EXPOSE 80

# The command to start the Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]