import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import OrderDelivered from "./OrderDelivered";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [showOrder, setShowOrder] = useState(false);

  const totalAmount = `Rp.${cartCtx.totalAmount.toFixed(3)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);  
  };

  // const cartItemDeleteHandler = (id) => {
  //   console.log(cartCtx);
  //   // Tampilkan konfirmasi alert sebelum menghapus item
  //   const isConfirmed = window.confirm(
  //     "Are you sure you want to delete this item?"
  //   );

  //   // Jika pengguna mengonfirmasi, baru hapus item
  //   if (isConfirmed) {
  //     cartCtx.deleteItem(id);
  //   }
  // };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHanlder = () => {
    cartCtx.clearall();
    setShowOrder(true);
  };

  const clearAllHandler = () => {
    // Display a custom confirmation dialog
    Swal.fire({
      title: 'The web says :',
      text: 'Are you sure you want to delete all items?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes"
        cartCtx.clearall();
      }
    });
  };

  
  
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          onDelete={() => clearAllHandler()}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {!showOrder ? (
        <>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button className={classes.button} onClick={orderHanlder}>
                Order
              </button>
            )}
          </div>
          <div className={classes.buttondelete}>
          <button className={classes.button} onClick={() => clearAllHandler()}>Clear</button>
          </div>
        </>
      ) : (
        <OrderDelivered onClose={props.onClose} />
      )}
    </Modal>
  );
};

export default Cart;
