let calculatorApp = angular.module('calculatorApp', []);
calculatorApp.controller('calculatorController', calculatorController);
function calculatorController() {
    
    this.calculate = function(){
        switch(this.operator){
            case '+' : this.result = parseInt(this.val1)+parseInt(this.val2);break;
            case '-' : this.result = parseInt(this.val1)-parseInt(this.val2);break;
            case '*' : this.result = parseInt(this.val1)*parseInt(this.val2);break;
            case '/' : this.result = parseInt(this.val1)/parseInt(this.val2);break;
        }
    }
    this.buttonClicked = function(operator){
        this.operator = operator;
    }

   
}