import Address from "@/components/shopping-view/address";
import img from "../../assets/account.jpg";
import { useDispatch, useSelector } from "react-redux";
import UserCartItemsContent from "@/components/shopping-view/cart-items-content";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { createNewOrder, saveOrder } from "@/store/shop/order-slice";
import { useToast } from "@/components/ui/use-toast";
import { PayPalButtons } from "@paypal/react-paypal-js";

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const { approvalURL } = useSelector((state) => state.shopOrder);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const [isPaymentStart, setIsPaymemntStart] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const cartItemsList = cartItems?.items ?? [];

  console.log(currentSelectedAddress, "selectedAddress");

  const totalCartAmount = cartItemsList.reduce(
    (sum, currentItem) =>
      sum +
      (currentItem?.salePrice > 0
        ? currentItem?.salePrice
        : currentItem?.price) * currentItem?.quantity,
    0
  );

  function handleInitiatePaypalPayment() {
    if (cartItemsList.length === 0) {
      toast({
        title: "Your cart is empty. Please add items to proceed",
        variant: "destructive",
      });

      return;
    }
    if (!currentSelectedAddress) {
      toast({
        title: "Please select one address to proceed.",
        variant: "destructive",
      });

      return;
    }

    const orderData = {
      userId: user?._id || user?.id,
      cartId: cartItems?._id,
      cartItems: cartItemsList.map((singleCartItem) => ({
        productId: singleCartItem?.productId,
        title: singleCartItem?.title,
        image: singleCartItem?.image,
        price:
          singleCartItem?.salePrice > 0
            ? singleCartItem?.salePrice
            : singleCartItem?.price,
        quantity: singleCartItem?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "pending",
      paymentMethod: "paypal",
      paymentStatus: "pending",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: "",
      payerId: "",
    };

    dispatch(createNewOrder(orderData)).then((data) => {
      console.log(data, "sangam");
      if (data?.payload?.success) {
        setIsPaymemntStart(true);
      } else {
        setIsPaymemntStart(false);
      }
    });
  }

  const createPayPalOrder = (data, actions) => {
    if (cartItemsList.length === 0) {
      toast({
        title: "Your cart is empty. Please add items to proceed",
        variant: "destructive",
      });
      return actions.reject();
    }

    if (!currentSelectedAddress) {
      toast({
        title: "Please select one address to proceed.",
        variant: "destructive",
      });
      return actions.reject();
    }

    return actions.order.create({
      application_context: {
        brand_name: "MERN E-Commerce",
        landing_page: "BILLING",
        user_action: "PAY_NOW",
        shipping_preference: "NO_SHIPPING",
      },
      purchase_units: [
        {
          description: "MERN E-Commerce order",
          amount: {
            currency_code: "USD",
            value: totalCartAmount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: totalCartAmount.toFixed(2),
              },
            },
          },
          items: cartItemsList.map((singleCartItem) => ({
            name: singleCartItem?.title || "Item",
            unit_amount: {
              currency_code: "USD",
              value:
                (singleCartItem?.salePrice > 0
                  ? singleCartItem?.salePrice
                  : singleCartItem?.price
                ).toFixed(2),
            },
            quantity: singleCartItem?.quantity.toString(),
          })),
        },
      ],
    });
  };

  const onApprovePayPal = async (data, actions) => {
    const details = await actions.order.capture();

    const orderData = {
      userId: user?._id || user?.id,
      cartId: cartItems?._id,
      cartItems: cartItemsList.map((singleCartItem) => ({
        productId: singleCartItem?.productId,
        title: singleCartItem?.title,
        image: singleCartItem?.image,
        price:
          singleCartItem?.salePrice > 0
            ? singleCartItem?.salePrice
            : singleCartItem?.price,
        quantity: singleCartItem?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "confirmed",
      paymentMethod: "paypal",
      paymentStatus: "paid",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: details.id,
      payerId: details.payer?.payer_id || "",
    };

    dispatch(saveOrder(orderData)).then((data) => {
      if (data?.payload?.success) {
        window.location.href = "/shop/payment-success";
      } else {
        toast({
          title: "Payment succeeded, but order could not be saved.",
          variant: "destructive",
        });
      }
    });
  };

  useEffect(() => {
    if (approvalURL) {
      window.location.href = approvalURL;
    }
  }, [approvalURL]);

  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img src={img} className="h-full w-full object-cover object-center" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address
          selectedId={currentSelectedAddress}
          setCurrentSelectedAddress={setCurrentSelectedAddress}
        />
        <div className="flex flex-col gap-4">
          {cartItems && cartItems.items && cartItems.items.length > 0
            ? cartItems.items.map((item) => (
                <UserCartItemsContent
                  key={item.productId || item._id || item.title}
                  cartItem={item}
                />
              ))
            : null}
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">${totalCartAmount}</span>
            </div>
          </div>
          <div className="mt-4 w-full">
            <Button onClick={handleInitiatePaypalPayment} className="w-full">
              {isPaymentStart
                ? "Processing Paypal Payment..."
                : "Checkout with Paypal"}
            </Button>
          </div>
          <div className="mt-4 w-full">
            <PayPalButtons
              style={{ layout: "vertical", label: "pay", shape: "rect" }}
              createOrder={createPayPalOrder}
              onApprove={onApprovePayPal}
              onError={(err) => {
                console.error(err);
                toast({
                  title: "PayPal checkout failed. Please try again.",
                  variant: "destructive",
                });
              }}
              onCancel={() => {
                toast({
                  title: "PayPal checkout was cancelled.",
                  variant: "destructive",
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
