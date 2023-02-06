import { Link } from "react-router-dom";

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
  return <div>{buyLink}{sellLink}</div>;
}

export default MarketHome;