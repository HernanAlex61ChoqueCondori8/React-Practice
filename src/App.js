import icon_luxury from './images/icon-luxury.svg';
import icon_sedans from './images/icon-sedans.svg';
import icon_suvs from './images/icon-suvs.svg';
import './App.css';
import classNames from 'classnames';

function CarCard(props){
  const { orange, cyan, darkCyan } = props;

  const classCarCard = classNames('car-card', 
    {'car-card--orange': orange}, 
    {'car-card--cyan': cyan}, 
    {'car-card--dark-cyan': darkCyan}
  );
  const classBtnCarCard = classNames('car-card__btn', 
    {'car-card__btn--orange': orange}, 
    {'car-card__btn--cyan': cyan}, 
    {'car-card__btn--dark-cyan': darkCyan}
  );

  return (
    <div className={classCarCard} style={{backgroundColor: props.background}}>
      <img className="car-card__image" alt="car" src={props.icon}></img>
      <h2 className="car-card__title">{props.title}</h2>
      <p className="car-card__text">{props.text}</p>
      <button className={classBtnCarCard}>Learn More</button>
    </div>
  );
}

function ContainerThreeCars(){
  return (
    <div className="three-cars">
      <CarCard title="sedans" text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." icon={icon_sedans} orange></CarCard>
      <CarCard title="SUVs" text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." icon={icon_suvs} cyan></CarCard>
      <CarCard title="Luxury" text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." icon={icon_luxury} darkCyan></CarCard>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ContainerThreeCars ></ContainerThreeCars>
    </div>
  );
}

export default App;
