# Unify Payment Gateway

**Unify Payment Gateway** is a Node.js package that provides seamless integration with multiple payment gateways. With this package, you can handle payments across various platforms like Stripe, PayPal, Razorpay, and more without needing to manage individual gateway logic. Just install the package and start accepting payments with minimal configuration!

[![npm version](https://badge.fury.io/js/unify-payment-gateway.svg)](https://badge.fury.io/js/unify-payment-gateway)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Features

- **Multi-Gateway Support**: Integrates with multiple payment gateways including Razorpay and PayU (with more coming soon)
- **Unified API**: A single API for handling payments across all gateways
- **TypeScript Support**: Full TypeScript support with type definitions included
- **Easy Setup**: Minimal configuration needed, allowing you to get started quickly
- **Extensible**: Easily add more gateways or customize existing ones
- **Secure**: Provides secure and reliable transaction handling

## Supported Payment Gateways

- ✅ **Razorpay** - Full support for orders, payments, and customers
- 🚧 **PayU** - Coming soon
- 🚧 **Stripe** - Planned
- 🚧 **PayPal** - Planned

## Installation

```bash
npm install unify-payment-gateway
```

## Quick Start

```typescript
import UnifyPaymentGatewayClient from 'unify-payment-gateway';
import { ProviderTypes, EnvironmentEnum, CurrencyEnum } from 'unify-payment-gateway';

// Initialize the client
const client = new UnifyPaymentGatewayClient({
  provider: ProviderTypes.RAZORPAY,
  clientId: 'your_razorpay_key_id',
  clientSecret: 'your_razorpay_key_secret',
  environment: EnvironmentEnum.SANDBOX // or PRODUCTION
});

// Create an order
const order = await client.order.createOrder({
  amount: 50000, // Amount in smallest currency unit (50000 = ₹500.00)
  currency: CurrencyEnum.INR,
  receipt: 'order_rcptid_12345',
  notes: {
    customer_id: '12345',
    product: 'Premium Plan'
  }
});

console.log('Order created:', order);
```

## Configuration

### Basic Configuration

```typescript
interface IUnifyPaymentGatewayConfigOptions {
  provider: ProviderTypes;        // Payment gateway provider
  clientId: string;              // Gateway client ID/key
  clientSecret: string;          // Gateway client secret
  environment?: EnvironmentEnum; // Optional: defaults to sandbox
}
```

### Available Enums

```typescript
// Payment Providers
enum ProviderTypes {
  RAZORPAY = "razorpay",
  PAYU = "payu"
}

// Environment Types
enum EnvironmentEnum {
  SANDBOX = "sandbox",
  TEST = "test", 
  PRODUCTION = "production",
  LIVE = "live"
}

// Supported Currencies
enum CurrencyEnum {
  INR = "INR"
}
```

## API Reference

### Orders

#### Create Order

Creates a new payment order.

```typescript
const orderPayload = {
  amount: 50000,                    // Required: Amount in smallest currency unit
  currency: CurrencyEnum.INR,       // Required: Currency code
  receipt: 'order_rcptid_12345',    // Optional: Receipt ID for your reference
  partial_payment: false,           // Optional: Allow partial payments
  notes: {                         // Optional: Key-value pairs for additional info
    customer_id: '12345',
    product: 'Premium Plan'
  }
};

const order = await client.order.createOrder(orderPayload);
```

**Response:**
```typescript
{
  id: string;              // Order ID
  entity: string;          // Entity type (order)
  amount: number;          // Order amount
  amount_paid: number;     // Amount paid so far
  amount_due: number;      // Amount due
  currency: CurrencyEnum;  // Currency code
  receipt?: string;        // Receipt ID
  offer_id?: string;       // Offer ID if any
  status: string;          // Order status
  attempts: number;        // Payment attempts
  notes: any;             // Additional notes
  created_at: number;     // Creation timestamp
}
```

#### Fetch All Orders

Retrieve a list of orders with optional filtering.

```typescript
const options = {
  from: 1640995200,        // Optional: Timestamp from
  to: 1641081600,          // Optional: Timestamp to  
  count: 10,               // Optional: Number of orders to fetch
  skip: 0                  // Optional: Number of orders to skip
};

const orders = await client.order.all(options);
```

#### Fetch Single Order

```typescript
const order = await client.order.fetch('order_id_here');
```

#### Fetch Order Payments

Get all payments for a specific order.

```typescript
const payments = await client.order.fetchPayments('order_id_here');
```

### Customers

#### Create Customer

```typescript
const customerPayload = {
  name: 'John Doe',                    // Required: Customer name
  contact: 9876543210,                 // Optional: Phone number
  email: 'john.doe@example.com',       // Optional: Email address
  fail_existing: false,                // Optional: Fail if customer exists
  gstin: '29ABCDE1234567890',         // Optional: GST number
  notes: {                            // Optional: Additional notes
    source: 'website',
    campaign: 'summer_sale'
  }
};

const customer = await client.customer.create(customerPayload);
```

#### Update Customer

```typescript
const updatePayload = {
  name: 'John Smith',
  email: 'john.smith@example.com',
  contact: 9876543211
};

const customer = await client.customer.update('customer_id', updatePayload);
```

#### Fetch All Customers

```typescript
const options = {
  count: 10,               // Optional: Number of customers to fetch
  skip: 0                  // Optional: Number of customers to skip
};

const customers = await client.customer.all(options);
```

#### Fetch Single Customer

```typescript
const customer = await client.customer.fetchCustomerById('customer_id');
```

#### Bank Account Management

##### Add Bank Account

```typescript
const bankPayload = {
  ifsc_code: 'HDFC0000001',              // Required: IFSC code
  account_number: '50100123456789',       // Required: Account number
  beneficiary_name: 'John Doe',           // Required: Account holder name
  beneficiary_address1: '123 Main St',    // Optional: Address line 1
  beneficiary_email: 'john@example.com',  // Optional: Email
  beneficiary_mobile: '9876543210',       // Optional: Mobile number
  beneficiary_city: 'Mumbai',             // Optional: City
  beneficiary_state: 'Maharashtra',       // Optional: State
  beneficiary_country: 'IN',              // Optional: Country code
  beneficiary_pin: '400001'               // Optional: PIN code
};

const result = await client.customer.addBankAccount('customer_id', bankPayload);
```

##### Delete Bank Account

```typescript
const result = await client.customer.deleteBankAccount('customer_id', 'account_id');
```

## Error Handling

```typescript
try {
  const order = await client.order.createOrder(orderPayload);
  console.log('Order created successfully:', order);
} catch (error) {
  console.error('Order creation failed:', error);
  
  // Handle specific error cases
  if (error.code === 'BAD_REQUEST_ERROR') {
    console.error('Invalid request parameters');
  } else if (error.code === 'UNAUTHORIZED') {
    console.error('Invalid API credentials');
  }
}
```

## Complete Example

Here's a complete example of creating an order and handling the payment flow:

```typescript
import UnifyPaymentGatewayClient from 'unify-payment-gateway';
import { ProviderTypes, EnvironmentEnum, CurrencyEnum } from 'unify-payment-gateway';

async function processPayment() {
  // Initialize client
  const client = new UnifyPaymentGatewayClient({
    provider: ProviderTypes.RAZORPAY,
    clientId: process.env.RAZORPAY_KEY_ID!,
    clientSecret: process.env.RAZORPAY_KEY_SECRET!,
    environment: EnvironmentEnum.SANDBOX
  });

  try {
    // 1. Create a customer
    const customer = await client.customer.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
      contact: 9876543210,
      notes: {
        source: 'website'
      }
    });
    console.log('Customer created:', customer.id);

    // 2. Create an order
    const order = await client.order.createOrder({
      amount: 50000, // ₹500.00
      currency: CurrencyEnum.INR,
      receipt: `receipt_${Date.now()}`,
      notes: {
        customer_id: customer.id,
        product: 'Premium Subscription'
      }
    });
    console.log('Order created:', order.id);

    // 3. Fetch order details
    const orderDetails = await client.order.fetch(order.id);
    console.log('Order status:', orderDetails.status);

    // 4. Get all orders (with pagination)
    const allOrders = await client.order.all({
      count: 5,
      skip: 0
    });
    console.log(`Found ${allOrders.count} orders`);

    return {
      customer,
      order,
      orderDetails
    };

  } catch (error) {
    console.error('Payment processing failed:', error);
    throw error;
  }
}

// Execute
processPayment()
  .then(result => {
    console.log('Payment processing completed successfully');
  })
  .catch(error => {
    console.error('Payment processing failed:', error);
  });
```

## TypeScript Support

This package is written in TypeScript and includes full type definitions. All interfaces and types are exported for your use:

```typescript
import {
  IUnifyPaymentGatewayConfigOptions,
  IOrderCreatePayload,
  IOrderResponse,
  ICustomerCreatePayload,
  ICustomerResponse,
  ProviderTypes,
  EnvironmentEnum,
  CurrencyEnum
} from 'unify-payment-gateway';
```

## Contributing

We welcome contributions! Here's how you can help:

1. **Add New Payment Gateways**: Implement support for additional payment providers
2. **Improve Documentation**: Help us improve our docs and examples  
3. **Bug Reports**: Report any issues you encounter
4. **Feature Requests**: Suggest new features or improvements

### Development Setup

```bash
# Clone the repository
git clone https://github.com/sumit6387/unify-payment-gateway.git

# Install dependencies
cd unify-payment-gateway
npm install

# Build the project
npm run build

# Run linting
npm run lint
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/sumit6387/unify-payment-gateway/issues)
- **GitHub Repository**: [https://github.com/sumit6387/unify-payment-gateway](https://github.com/sumit6387/unify-payment-gateway)

## Changelog

### v1.0.3
- Initial release with Razorpay support
- Full TypeScript support
- Order, Customer, and Payment management
- Comprehensive documentation

---

**Keywords**: unify-payment-gateway, payment, razorpay, payu, nodejs, typescript, payment-integration, unified-api

Made with ❤️ by [Sumit Kumar](https://github.com/sumit6387)