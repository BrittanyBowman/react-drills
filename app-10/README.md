Create an app that has two routes (using `react-router-dom`):
  * Component name: `Products`, Component route: `'/'`
  * Component name: `Details`, Component route: `'/details/:id'`

The `App` component should render the `router`. The `Products` component should hit an API of your choice that shows a list of products/info/people/cars. When a user clicks on one of the products/info/people/cars it should route to `Details` component with the `id` as a route parameter. The `Details` component should hit an API of your choice to get more data for a single product/info/person/car.

In the solution code to follow, we used the DevMountain Practice API server.