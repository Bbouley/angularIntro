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

