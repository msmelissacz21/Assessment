// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name


let yourName = "Melissa Zuengler" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')

const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')

const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb = gb+1
    console.log(gb)
    document.getElementById("qty-gb").innerHTML = gb;
    document.getElementById("qty-total").innerHTML = gb+cc+sugar;
})


gbMinusBtn.addEventListener('click', function() {
    
    if (gb>=1)
        {gb = gb-1
        console.log(gb)
        document.getElementById("qty-gb").innerHTML = gb;
     document.getElementById("qty-total").innerHTML = gb+cc+sugar;}
})

ccPlusBtn.addEventListener('click', function() {

    cc = cc+1
    console.log(cc)
    document.getElementById("qty-cc").innerHTML = cc;
    document.getElementById("qty-total").innerHTML = gb+cc+sugar;
})

ccMinusBtn.addEventListener('click', function() {


    if (cc>=1)
        {cc = cc-1
        console.log(cc)
        document.getElementById("qty-cc").innerHTML = cc;
        document.getElementById("qty-total").innerHTML = gb+cc+sugar;}

})

sugarPlusBtn.addEventListener('click', function() {

    sugar = sugar+1
    console.log(sugar)
    document.getElementById("qty-sugar").innerHTML = sugar;
    document.getElementById("qty-total").innerHTML = gb+cc+sugar;
})

sugarMinusBtn.addEventListener('click', function() {
    
    if (sugar>=1)
    {sugar = sugar-1
    console.log(sugar)
    document.getElementById("qty-sugar").innerHTML = sugar;
    document.getElementById("qty-total").innerHTML = gb+cc+sugar;}
})




// TODO: Hook up event listeners for the rest of the button