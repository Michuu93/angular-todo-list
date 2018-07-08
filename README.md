# TODO List

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.  
The app will automatically reload if you change any of the source files.

## Build app
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build Docker image
Run `docker build -t todo-list .` to build app in production mode and create docker image.

## Run Docker image
Run `docker run -p 8080:80 todo-list` for your own image,  
or `docker run -p 8080:80 michuu93/todo-list` for my image on DockerHub.  
Navigate to `http://localhost:8080/`.
