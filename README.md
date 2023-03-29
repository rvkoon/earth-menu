### Install

Install with `yarn install`

### Create a UI component

run `yarn plop`
then enter the **componentName**
then **componentName** folder, component and basic tests will automatically be created in `modules/ui`

### Create route

Simply add a file within `/pages`
each file will create a path like `domain.com/<fileName>`
folder nesting will create subpaths like `domain.com/<foldername>/<filename>`

### Create Api route

If folder for a specific model does not already exist, create it under `modules/api/<modelName>`
Otherwise, just create a file for the specific useCase under this folder `modules/api/<modelName>/<useCase>.ts`

### Fetch route

the project uses [react-query]("https://react-query-v3.tanstack.com/overview")
Each query should have a unique key that follow the pattern `['<model>', '<useCase>']` in order to stay ISO with front/back APIs.
For example, creating a card would be `['card','create']`
