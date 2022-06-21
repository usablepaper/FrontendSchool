import { useEffect } from "react";
import { useSelector, useDispatch, ReactReduxContext } from "react-redux";
import { sale, soldout } from "../modules/stockCounter";

function StockCounter() {
    const { message } = useSelector((state) => ({
        message: state.stockReducer.message,
    }));

    const { stock } = useSelector((state) => ({
        stock: state.goodsReducer.stock,
    }));
    console.log(stock);

    const dispatch = useDispatch();

    const onSale = () => dispatch(sale());
    const onSoldout = () => dispatch(soldout());

    useEffect(() => {
        if (stock <= 0) {
            onSoldout();
        } else {
            onSale();
        }
    }, [stock]);

    return (
        <>
            <p>{message}</p>
        </>
    );
}

export default StockCounter;
