# Broken App Issues

The post route was update so the application was making a single API call to the GitHub API using Promise.all. Using Promise.all was utilize parallel request. Added a error handler function to display any errors that the post route migh encounter
