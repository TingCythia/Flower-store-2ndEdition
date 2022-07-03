# Flower-store-2nd
Github link:https://github.com/TingCythia/Flower-store-2ndEdition

1. Website layout 
The logic flow is in the beginning design website layout, using Material UI for the Header, background page, and footer. 
And make product page, single product page, cart page is responsive mix with CSS properties, Css style and Material UI.
Last is the checkout pages, using Material UI model and add function code based on MUI component functions. 

2. Create the product list and Cart function with redux
Products list and single product both using Interface method to define the Object key and save them to localStorage. 
Product and cart page we are using redux, first create their reducer slices, and product reducer is making a lists can display on the page. Cart reducer is making several functions like "add to cart", "remove product from cart", "increase and decrease quantity"

3. Cart page can update and change the order lists, click "Checkout" Button, import {Link} from React Router Dom can router to the next Checkout page. 

4. On checkout page. 
First is shipping address, using Formik and Yup to validate Address information, need to click "Summit" button to update the address information value to Localstorage, in the review page will get the shipping address value to confirm. After Summit then proceed the next page to fill in the Payment information, Payment information have 3 options that is can fill in the credit card, Swish and Paypal, also using Formik and yup validate the value, save the payment method to localstorage and get the value in the review page to confirm. Proceed to review page, have 3 shipping options includes price and delivery method and time. On review page also can see total price include tax and after add shipping method price, will have a final payment price . 

Once confirm all the order and click "place order", page will reload and router to "Thank you page", once order proceed can not go back to buy it again, need to make a new order. 

Goal for godkänt:
1.Git & GitHub har använts
2.Projektmappen innehåller en README.md fil - (läs ovan för mer info)
3.Uppgiften lämnas in innan deadline!
4.Ett designsystem används
5.React Router skall användas som navigation. Exempelvis så skall produkten som visas på produktsidan ska baseras på en parameter i url’en.
6.React context skall användas för hantering av kundvagnen.
7.Samtliga fält ska ha valideringsregler (tips, se Material UI:s dokumentation)
8.Sidan ska vara fullt responsiv
9.Mockade produkter ska ligga i en egen fil och vara typade med ett TS interface

 
