const buttons = document.querySelectorAll('button');

const allImages = document.querySelectorAll('image');
// Collect all Images and in a variable called allImages

const toogleIamges = dataClass => {
    // Ternary operator
    dataClass === 'all'
    ? allImages.forEach( image => image.style.display = 'flex')
    : allImages.forEach( image => {
        image.dataset.clas === dataClass
        ? (image.style.display = 'flex')
        : ( image.style.display = 'none');
    });

//    const toogleIamges = (dataClass) => {
//        if (dataClass === "all") {
//            allImages.forEach((image) => (image.style.display = "flex"));
//    } else {
//        allImages.forEach((image) => {
//            if (image.dataset.clas === dataClass) {
//                image.style.display = "flex";
//            } else {
//                image.style.display = "none";
//            } 
//        });
//    }
// }; 

}

const toggleActiveClass = ( active ) => {
    buttons.forEach( button => {
        button.classList.remove('active');
    })
    active.classList.add('active');
}

buttons.forEach( button => {
    button.addEventListener('click', () => {
        toogleImages(button.dataset.class);
        toogleActiveClass( button );
    } );
})