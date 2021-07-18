import mongoose from 'mongoose';
import { OrderStatus } from '@yisus44tickets/common';

import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface PaymentAttrs {
  orderId: string;
  stripeId: string;
}

interface PaymentDoc extends mongoose.Document {
  version: number;
  orderId: string;
  stripeId: string;
}

const PaymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    stripeId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const PaymentModel = mongoose.model('Payment', PaymentSchema);

class Payment extends PaymentModel {
  constructor(data: PaymentAttrs) {
    super(data);
  }
}

export { Payment };
