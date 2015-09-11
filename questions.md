###1.  Why learn angular over other frameworks?
  - It's easy to learn in the beginning as it works with HTML
  - angular is a lightweight framework
  - you can declare two way binding and not have to write this code yourself

###2.  3 Common complaints about Angular
  - Often it is critized for the complexity of the Directives API.
  - The scope hierarchy uses prototypal inheritance which is a new concept to grasp for people used to OO languages. Scope is a big issue in Angular
  - It can be difficult to correct mistakes given scope inheritance. A mistyped command can cause a lot of issues and be very difficult to find

###3. Is angular an MVC Framework?
  - Yes, the view is the DOM, the controllers are Javascript and the model data is stored in object properties


###4. What does ```ng``` stand for and what does ```ng-app``` do?
  - The ```ng``` stands for Angular, and the built-in directives use that prefix. ng-app auto-bootstraps and AngularJS application. It designates the root elemnt of the application

###5. What does ```ng-model``` do?
  - This binds an ```input```, ```select```, ```textarea``` (custom form control) to a property on the scope
  - It evaluates the expression on the current scope and binds to the property. If property doesn't already exist on this scope, it is created implicitly and added to scope

###6. What is 'dirty checking'?
  - It is a cycle. Angular checks any changes to variables watched by $scopes.
  - If there is a $scope.myVar defined in controller then you are telling Angular to monitor changes on myVar in each loop iteration

###7. What are those ```{{ }}``` expressions?
 - They're used for witing things to HTML once you've written a directive and set attributes.

###8. Explain what two-way data binding is?
 - This means that when properties in the model get updated, the UI also get's updated
 - It also works so when the UI gets updated the changes are propagated back to the model

 ###9. What are angular expressions?
  - They are javascript-like code snippets that you can place in bindings. e.g. ```{{ 2 + 4 }}``` These can then be evaluated by angular

 ###10. What happens writing invalid code in an expression?
  - The program will print out exactly what is in the binding and not evaluate what's contained inside. So, using example above, if you entered ```{{ 2 + | }}``` the program prints out exactly that in the html
  - It also causes all the other expressions in bindings to fail and the program will simply print out the curly braces directly onto the page

 ###11. What are angular filters? Name 4 built in filters.
  - It is a filter for a single piece of model data that edits the data before exposing it to the view. (namely, us)
  - It isn't a loop, it is used for a specific piece of model data
  - 4 of the built in filters are:
    - currency
    - number
    - date
    - json


 ###12. What's the syntax for filters?
  - ```{{ expression | filter }}```

 ###13. Can you use more than one filter?
  - Yes, filters can be chained using the following syntax:
    ```{{ expression | filter1 | filter2 ...}}```

 ###14. What is a use case for a custom filter?
  - If the filter is not going to be a single-use filter then it can be very valuable to use a custom filter that can then be used multiplpe times throughout the program



