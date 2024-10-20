# Steps

## ----- Step 1

- changes in pancake type select box + all checkbox inputs
- calculates total price
- displays updated price

### Looping through checkboxes

Had problem in figuring out how to loop through checkboxes, as there are several in DOM with <div class="customization-section">
and <input type="checkbox" ... >

Was useful to learn how to target checkboxes which are in same div class, example
`class-name:nth-of-type(2)`

### Animation

Learning how to use classList for animation:
`priceBanner.classList.add('updated');`
was useful.

## ----- Step 2

### Delivery info

Adding buttons was quite easy. But I ran into an error

### Error

`Uncaught TypeError: Cannot read properties of null (reading 'runtime')`

I had two similar ID's in code: totalPrice:
`<div class="price-banner"><span id="totalPrice">$5</span></div>
`
and
`<h3>Total Price: <span id="totalPrice">$5</span></h3>
`
So. Changed:
`<div class="price-banner"><span id="totalPrice">$5</span></div>
`
to
`<div class="price-banner"><span id="bannerPrice">$5</span></div>
`
Additionatelly, references in JS had to be chaned. Example:
`const priceBanner = document.querySelector('#bannerPrice');`

Error was actually due to chrome extension.
