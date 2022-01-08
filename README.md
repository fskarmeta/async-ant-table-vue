# Asynchronous row expansion for Ant Table and Ant Collapse, as well as synchronous communication between both components.

## This is an example component in which we synchronize an Ant Table with an Ant Collapse through the active Keys prop API. The Table component is used for desktop resolutions and the Collapse component for mobile. But perhaps the most useful is the asynchronous behavior of expanding a row of the Table or expanding the collapse.

## In this example we have the assumption that preliminary data is called first to fill the content of the table and consecutively for each row of the table a specific call is made that, when successfully solving, expands the table to show the detail.

## Also, if a row was previously called successfully, it is saved in a map so that you do not have to make the call again when expanding the row.

## Ant's Collapse component had to be overwritten a bit to accept a larger Header.

## If you see the need to implement something similar, you are free to use this component as a boilerplate and expand or modify it for your needs.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
