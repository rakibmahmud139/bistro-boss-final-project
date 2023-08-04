/**
 * 
 * 1. install stripe and react stripe jsw
 * 2. create a check out form with card element.(card element contains: card number, expiration date, cvs, zip number)
 * 3. crate account on stripe and get publishable key pk.
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment
 * 7. on the server site install strip (npm install --save stripe)
 * 8. create a payment intent API: with payment_method_types: ["card"]
 * make sure you provide amount in cents(multiply amount with 100)
 * 9. call payment intent api to get client secret and set it in a state
 * 10. use confirmCardPayment API with clientSecret and card Info
 * 11. display confirm card error and success
 * 12. do things after payment ---> 
*/