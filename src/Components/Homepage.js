import './Styles/Homepage.css';
import VaultBoy from './Icons/VaultBoy'
import Calculator from './Calculator';

function Homepage() {
  return (
    <div className="homepage">
      <div className='row'>
      <h1 className='title cent row'>Calculator</h1>
      <VaultBoy />
      </div>
      <div className='calculator-cont box-3'>
        <Calculator />
      </div>
    </div>
  );
}

export default Homepage;
