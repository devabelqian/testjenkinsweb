# azurewebsample

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


docker build -t azureweb/azurewebdocker .

docker run -it -p 12333:12333 --rm --name azurewebdocker azureweb/azurewebdocker
