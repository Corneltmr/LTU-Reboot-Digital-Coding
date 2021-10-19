// This is a single line comment

/**
 *  This is a multiple
 *  line comment
 * */

/** 
 *     let age = 31
 *     const name = 'Cornel'
 *     var address = '15 highthorne';
 * 
    * let $variable = 0;
    * let variable = 0;
    * let_variable = 0;
    * 
    * let firstName = ''Cornel'';
    * let lastName = ''Timaru''; 
*/

const productName = 'Baked Beans';
let price = 1.27;
let quantity = 4;
let inStock = true;
let discountAmount = 10;

// console.log( 'Product Name:', productName );
// console.log( 'Price', price );
// console.log( 'Quantity', quantity );
// console.log( 'In Stock', inStock );
// console.log( 'Disocunt', discountAmount );

// console.log( typeof productName );
// console.log( typeof price );
// console.log( typeof quantity );
// console.log( typeof inStock );
// console.log( typeof discountAmount );

// document.write( ''<p> + productName + ''</p>);

// let myName = '';
// let numOfKids = 0;
// let isMarried;

// let newName = 'Cornel';
// let newNumOfKids = '1';

// console.log( Boolean(myName) );
// console.log( Boolean(numOfKids) );
// console.log( Boolean(isMarried) );
// console.log( Boolean(null) );
// console.log( Boolean(undefined) );
// console.log( '--------');
// console.log( Boolean(newName) );
// console.log( Boolean(newNumOfKids) );

function showProductName() {
    console.log( productName );
}

function totalPrice( productPrice,productQuantity ) {
    console.log( productPrice * productQuantity );
}

// totalPrice( price, quantity );

// function checkAvailability( productInStock ) {
//     console.log( productInStock );
// }

const checkAvailability = productInStock => console.log( productInStock );

// checkAvailability( inStock );

// let global = 'Global Scope';

// const localScope = () => {
//    let scope = 'Local Scope'; // Local
//    console.log('Inside the fucntion localScope: ${scope}');
//    console.log('From outside the function : ${global}');
// }

// localScope();

// console.log( global );

function productDiscount() {
    if( quantity > 1 ) {
        let newPrice = discountAmount - ( price * quantity );
        console.log( newPrice );
    } else {
        console.log( price * quantity );
    }
}

// productDiscount();

// switch Statement

// const level = 6;

// switch( level ) {
//   case 1 :
//       console.log('You are on level 1');
//       break;
//    case 2 :
//       console.log('You are on level 2');
//       break;
//    case 3 :
//       console.log('You are on level 3');
//       break;
//    case 4 :
//       console.log('You are on level 4');
//       break;
//    default:
//       console.log('No level found');
//       break;
}

// if( level === 1 ) {
//   console.log('You are on level 1');
// } else if(level === 2) {
//   console.log('You are on level 2');
// } // ....
// else {
//   console.log('No level found'); 
// }

// ....... code

const drinkOrder = ( drink, size ) => {

    switch( drink ) {
        case 'cola':
            console.log( '${size} : ${drink}'); 
            break;
        case 'lemonade':
            console.log( '${size} : ${drink}');
            break;
        case 'orangede':
            console.log( '${size} : ${drink}');
            break;
        default:
            console.log('We currently don't have your ${drink} in stock');
            break;
    }
}

// drinkOrder('apple juice', 'x-large');

const calculator = ( num1, num2, operator ) => {

    switch( operator ) {
        case '+':
            console.log( `${num1} + ${num2} = ${num1 + num2}` );
            break;

        case '-':
            console.log( `${num1} - ${num2} = ${num1 - num2}` );
            break;

        case '/':
            console.log( `${num1} / ${num2} = ${num1 / num2}` );
            break;

        case '*':
            console.log( `${num1} * ${num2} = ${num1 * num2}` );
            break;

        default:
            console.log(`The ${operator} that you chose is invalid`);
            break;
    }
}

// calculator( 5, 5,'+');
// calculator( 5, 5,'*');
// calculator( 5, 5,'/');
// calculator( 5, 5,'-');
// calculator( 5, 5,'?');

const product1 = [ productName, price, quantity, inStock, discountAmount ];

// let firstItem = product[0];
// let lastItem = product[product.length - 1];

// console.log( firstItem, lastItem );

const product2 = {
    "productName" : 'Apples',
    price: 1.60,
    quantity: 6,
    inStock: true,
    discountAmount: 0.20,
};

// console.log ( `Before : ${product2.price}` );

product2.price = 1.25; // Modidying the object
product2.colour = `Green`; // Adding to the object

// console.log( `Àfter : ${product2.price}` );

// console.dir( product2 ); // Helps console the object
// console.table( product2 ); // Helps console the object

// console.log( product2.colour );


// const productName = product["product name"];

// console.log( product.price ); // Dot notation
// console.log( product["price"] ); // square bracket notation
// console.log( product["product name"]); // Square Bracket notation


// let colours = ['Green', 'Orange', 'Blue', 'Brown', 'Pink', 'Purple'];

// for ( let index = 0; index < colours.length; index++ ) {

//    console.log( colours[index]);

// }


/**
 * get the results of the 7 times table 
 * 
 */

function multiply( num, maxNum ) {

    for( let counter = 1, counter <= maxNum; counter++ ) {

        let multiplyBy = num;
    
        let result = counter * multiplyBy;

        console.log( `${counter} * ${num} = ${result}` );
}

}

multiply( 7, 12 )