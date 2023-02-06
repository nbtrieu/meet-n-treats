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
  return(
    <div className="market-home page pet-info-card">
      <h1 className="market-home__greeting">Welcome to the Marketplace</h1>
      <div className="market-home__options">
        <Link to={`/marketplace/buy`} className="market-home__option market-home__option--buy">
          <h2>Buy</h2>
        </Link>
        <Link to={`/marketplace/sell`} className="market-home__option market-home__option--sell">
          <h2>Sell</h2>
        </Link>
      </div>
    </div>
  )
}

export default MarketHome;