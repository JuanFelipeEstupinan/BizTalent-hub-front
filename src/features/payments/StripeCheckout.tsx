import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_YOUR_KEY_HERE')

export default function StripeCheckout() {
  return (
    <div>
      <h2>Stripe Payment</h2>
      <Elements stripe={stripePromise}>
        {/* Add your checkout form here */}
        <p>Checkout form goes here.</p>
      </Elements>
    </div>
  )
}
