import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
	const history = useHistory();
	const [{ basket }, dispatch] = useStateValue();
	console.log(basket);

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket) * 1.13}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button
				onClick={(e) => {
					if (basket.length !== 0) {
						alert("Purchase successful !");
					} else {
						alert("Please add at least 1 item to make a purchase");
					}
				}}
			>
				Proceed to checkout
			</button>
		</div>
	);
}

export default Subtotal;
