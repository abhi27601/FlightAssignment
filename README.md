
### Tech Stack
1.  HTML  & CSS
2.  JS(React)
3. Server(Express)
4. Tools(webpack,  Babel)

## Best Practices

1.  DRY principle
2.  Image Lazy Load
3.  Maintainable Project Folder Structure
4.  Webpack bundling

# Flight Application
Flight web app is Client-side application. Server is built on express.
This application uses Firebase API google Auth for authentication.
Once you log in using gmail you will be presented with Dashboard of all the filght details.
you are able to filter the flights using launch_Year,launch_success,land_success.
Used Redux for storing auth state, flights , filters.
Did filtering at client side.
Added some tests using jest and enzyme.
Page is different Layout for Mobile, Tab and Desktop.
Used webpack to build the files for production and dev env.
server js is used to serve the dist.
Run yarn install
dev build: yarn build:dev
prod build : yarn build
start server: yarn start
Run Tests: yarn test
Web app is hosted in Heroku and it  is connected to github. So every commit in main branch will trigger the deployment automatically.





