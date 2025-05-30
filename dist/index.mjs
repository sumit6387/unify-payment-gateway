var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/payment-integrations/razorpay/index.ts
import Razorpay from "razorpay";

// src/payment-integrations/razorpay/Order.ts
var Order = class {
  constructor(instance) {
    this._razorPayInstance = instance;
  }
  fetchPayments(orderId) {
    return __async(this, null, function* () {
      const order = yield this._razorPayInstance.orders.fetchPayments(orderId);
      return order;
    });
  }
  fetch(orderId) {
    return __async(this, null, function* () {
      const order = yield this._razorPayInstance.orders.fetch(orderId);
      return order;
    });
  }
  all(options) {
    return __async(this, null, function* () {
      const orders = yield this._razorPayInstance.orders.all(options);
      return orders;
    });
  }
  createOrder(order) {
    return __async(this, null, function* () {
      const data = yield this._razorPayInstance.orders.create(order);
      return data;
    });
  }
};

// src/payment-integrations/razorpay/Payment.ts
var Payment = class {
  constructor(instance) {
    this._razorPayInstance = instance;
  }
};

// src/payment-integrations/razorpay/Customer.ts
var Customer = class {
  constructor(instance) {
    this._razorPayInstance = instance;
  }
  all(options) {
    return __async(this, null, function* () {
      var customers = yield this._razorPayInstance.customers.all(options);
      return customers;
    });
  }
  update(customerId, payload) {
    return __async(this, null, function* () {
      const customer = yield this._razorPayInstance.customers.edit(customerId, payload);
      return customer;
    });
  }
  create(payload) {
    return __async(this, null, function* () {
      const customer = yield this._razorPayInstance.customers.create(payload);
      return customer;
    });
  }
  fetchCustomerById(customerId) {
    return __async(this, null, function* () {
      const customer = yield this._razorPayInstance.customers.fetch(customerId);
      return customer;
    });
  }
  addBankAccount(customerId, payload) {
    return __async(this, null, function* () {
      const customer = yield this._razorPayInstance.customers.addBankAccount(customerId, payload);
      return customer;
    });
  }
  deleteBankAccount(customerId, accountId) {
    return __async(this, null, function* () {
      const bank = yield this._razorPayInstance.customers.deleteBankAccount(customerId, accountId);
      return bank;
    });
  }
};

// src/payment-integrations/razorpay/index.ts
var RazorPay = class {
  constructor(keyId, keySecret) {
    if (keyId == null || keySecret == null) {
      throw new Error("keyId and keySecret are required");
    }
    this._keyId = keyId;
    this._keySecret = keySecret;
    this._instance = new Razorpay({
      key_id: this._keyId,
      key_secret: this._keySecret
    });
    this.order = new Order(this._instance);
    this.payment = new Payment(this._instance);
    this.customer = new Customer(this._instance);
  }
};

// src/gateway/Order.ts
var Order2 = class {
  constructor(config) {
    this._config = config;
    if (this._config.provider == "razorpay" /* RAZORPAY */) {
      const razopay = new RazorPay(this._config.clientId, this._config.clientSecret);
      this.order = razopay.order;
    }
  }
  createOrder(order) {
    return __async(this, null, function* () {
      return yield this.order.createOrder(order);
    });
  }
  all(options) {
    return __async(this, null, function* () {
      return yield this.order.all(options);
    });
  }
  fetch(orderId) {
    return __async(this, null, function* () {
      return yield this.order.fetch(orderId);
    });
  }
  fetchPayments(orderId) {
    return __async(this, null, function* () {
      return yield this.order.fetchPayments(orderId);
    });
  }
};

// src/gateway/Payment.ts
var Payment2 = class {
  constructor(config) {
    this._config = config;
    if (this._config.provider == "razorpay" /* RAZORPAY */) {
      const razopay = new RazorPay(this._config.clientId, this._config.clientSecret);
      this.payment = razopay.payment;
    }
  }
};

// src/gateway/Customer.ts
var Customer2 = class {
  constructor(config) {
    this._config = config;
    if (this._config.provider == "razorpay" /* RAZORPAY */) {
      const razopay = new RazorPay(this._config.clientId, this._config.clientSecret);
      this.customer = razopay.customer;
    }
  }
  create(payload) {
    return __async(this, null, function* () {
      return yield this.customer.create(payload);
    });
  }
  update(customerId, payload) {
    return __async(this, null, function* () {
      return this.customer.update(customerId, payload);
    });
  }
  all(options) {
    return __async(this, null, function* () {
      return this.customer.all(options);
    });
  }
  fetchCustomerById(customerId) {
    return __async(this, null, function* () {
      return this.customer.fetchCustomerById(customerId);
    });
  }
  addBankAccount(customerId, payload) {
    return __async(this, null, function* () {
      return yield this.customer.addBankAccount(customerId, payload);
    });
  }
  deleteBankAccount(customerId, accountId) {
    return __async(this, null, function* () {
      return this.customer.deleteBankAccount(customerId, accountId);
    });
  }
};

// src/index.ts
var UnifyPaymentGatewayClient = class {
  constructor(config) {
    this._config = config;
    this.order = new Order2(config);
    this.customer = new Customer2(config);
    this.payment = new Payment2(config);
  }
};
var index_default = UnifyPaymentGatewayClient;
export {
  index_default as default
};
