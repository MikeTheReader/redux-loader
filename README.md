# Redux Loader

A sample / learning application for understanding redux and dealing with async / loading methods.

This project looks at handling the loading of an outside resource (in this case one of three .json files). In 
one portion of the app, this is taken care of by React State. In the other section of the app, this is taken
care of by Redux and [redux-thunk](https://github.com/gaearon/redux-thunk).

An additional pause is included to mimic slow network times.

Both of the containers (`ReactStateDataLoader` and `ReduxConnectedDataLoader`) use the same display components to render their
results. This is a demonstration of the re-usability of the simpler components.

## Note

The intention of this is not to say that Redux should be used for all projects, big and small. In fact, one thing
this project highlights is the amount of additional code required to use Redux in an application that only has
as small amount of state that can be controlled by a component higher in ther hierarchy. 

See [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) for more
details on this.

## Github Pages

The code is running at: https://MikeTheReader.github.io/redux-loader

#### Bootstrapped

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

