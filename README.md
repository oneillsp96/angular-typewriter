# angular-typewriter
Directive to "typewrite" out specified input at specified speed

#Install

1. Download file
2. Reference file in script on index.html
3. Add angular-typewriter module to your app module (see below)

angular
    .module('yourAppName', [
    'rest',
    'of',
    'your'
    'dependencies',
    'angular-typewriter']);
    
    
    #Usage
    
    <!--speed is interval time in ms-->
    
    message to type can come from $scope binding, like so:
    
    <typewriter inputter="{{input.message}}" speed="200"></typewriter>
    
    
    
    or, can specifiy string right in the directive:
    
    <typewriter inputter="'Please type this message one letter at a time'" speed="200"></typewriter>
    
