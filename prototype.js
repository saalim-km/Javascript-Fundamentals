// Prototype{...}.
// whenever you create a javascript object, js engine automatically
//   without even letting you know attaches your object with some hidden
//  'properities' and 'methods' and these are the hidden properites and
//   function which you can access it by just doing 'object.' and we can do a lot things.


let arr = [1,2,3]

let obj = {
    name : 'salim',
    place : 'kochi',
    fullName : function () {
        console.log(this.name + this.place);
    }
}

function a() {
    
}