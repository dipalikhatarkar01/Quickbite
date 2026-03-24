import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error placing order" });
  }
};

const placeOrderCod = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      paymentMethod: "COD"
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed (COD)" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error placing COD order" });
  }
};

const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching orders" });
  }
};


const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching orders" });
  }
};

const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status
    });

    res.json({ success: true, message: "Status Updated" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error updating status" });
  }
};

const verifyOrder = async (req, res) => {
  res.json({ success: true, message: "Payment Verified" });
};

const createStripeSession = async (req, res) => {
  try {

    let { amount } = req.body;


if (amount < 50) {
  amount = 50;
}

    console.log("Amount received:", amount);

    if (!amount || isNaN(amount)) {
      return res.json({ success: false, message: "Invalid amount" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "QuickBite Order",
            },
            unit_amount: Number(amount) * 100,
          },
          quantity: 1,
        },
      ],

      mode: "payment",

      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ success: true, url: session.url });

  } catch (error) {
    console.log("Stripe Error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderCod,
  userOrders,
  listOrders,
  updateStatus,
  verifyOrder,
  createStripeSession
};