import { Link } from "react-router-dom";
import MarketBuy from "../MarketBuy";
import MarketSell from "../MarketSell";

function MarketHome() {
  const buyLink = <Link
                to={`/marketplace/buy`}
                style={{ textDecoration: 'none' }}>
                <p className='light-text'>Buy</p>
              </Link>
  const sellLink = <Link
                to={`/marketplace/sell`}
                style={{ textDecoration: 'none' }}>
                <p className='light-text'>Sell</p>
              </Link>
  const greeting = `Hello would you like to ${buyLink} or ${sellLink}`;
  return(
    <div className="page">
      Hello would you like to {buyLink} or {sellLink} ?
    </div>)
}

export default MarketHome;