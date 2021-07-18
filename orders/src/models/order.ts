import mongoose from 'mongoose';
import { OrderStatus } from '@yisus44tickets/common';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { TicketDoc } from './ticket';

interface OrderAttributes {
  userId: string;
  status: OrderStatus;
  expirestAt: Date;
  ticket: TicketDoc;
}

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: Object.values(OrderStatus),
    default: OrderStatus.Created,
  },
  expiresAt: {
    type: mongoose.Schema.Types.Date,
  },
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket',
  },
});

OrderSchema.set('toJSON', {
  transform(doc: any, ret: any) {
    ret.id = ret._id;
    delete ret.__v;
    delete ret._id;
    delete ret.password;
  },
});
OrderSchema.set('versionKey', 'version');
OrderSchema.plugin(updateIfCurrentPlugin);
const OrderModel = mongoose.model('User', OrderSchema);

class Order extends OrderModel {
  constructor(attributes: OrderAttributes) {
    super(attributes);
  }
}

export { Order, OrderStatus };
