const Stripe = require('stripe');
const stripe = Stripe('sk_test_51I58KmEl6l46iXZbK3zmNY7THHmnRtNNuxRRS5hTPpFC4V0FihLSbdysFeqnjpgdABc88R2j4ChH2LTeJWrQTtMU00fyodBQll');


async function createPaymentSession(req , res){
    try{
        const {planID,userID} = req.body;
        
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price:  {
                currency: 'usd',
                product_data: {
                  name: plan.name,
                },
                unit_amount: plan.price*100,
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
          // the actual Session ID is returned in the query parameter when your customer
          // is redirected to the success page.
          success_url: 'https://localhoast300/home',
          cancel_url: 'https://localhoast300/home',
        })
        console.log("inside");
    }
    catch(error){
        res.json({
            message:"Failed to create payment session",
            error
        })
    }
}


module.exports.createPaymentSession = createPaymentSession;