## controller

  To create a controller :

    **nest g controller "name"**

  to implement on the app you have to add it in app.module.ts : in the array Module

  type of http methods :

    @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options() @Head(). In addition, @All() defines an endpoint that handles all of them.

  list of decorator :

    @Body(): Represents the body of the request. It will return the data from the body in the appropriate format (e.g., JSON data or form data).

    @Param(): Represents the request parameters (the variable parts of the URL). For example, in the URL "/users/:id", @Param('id') will return the value of the id parameter.

    @Query(): Represents the query string data. For example, in the URL "/users?name=john", @Query('name') will return the value of the name parameter.

    @Headers(): Represents the HTTP headers of the request. It allows you to retrieve information such as authentication headers, content types, etc.

    @Req(): Represents the entire request object. You can use it if you need to access specific information from the request that is not covered by the other decorators.