import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleBurges from '../sample-burgers';

class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  addBurger = (burger) => {
    //1. Делаем копию обьекта state
    const burgers = { ...this.state.burgers };
    //2. Добавить новый бургер в переменную burgers
    burgers[`burger${Date.now()}`] = burger;
    //3. Записать наш новый обьект burgers в state
    this.setState({ burgers });
  };

  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurges });
  };

  addToOrder = (key) => {
    //.1Делаем копию обьекта state
    const order = { ...this.state.order };
    //.2 Добавить ключ к заказу со знач-ем 1, либо обновить текущее знач-ие
    order[key] = order[key] + 1 || 1;
    //3. Записать наш новый обьект order в state
    this.setState({ order });
  };

  render() {
    return (
      <div className='burger-paradise'>
        <div className='menu'>
          <Header title='Very Hot Burger' amount={10} hot={true} />
          <ul className='burgers'>
            {Object.keys(this.state.burgers).map((key) => {
              return (
                <Burger
                  key={key}
                  index={key}
                  addToOrder={this.addToOrder}
                  details={this.state.burgers[key]}
                />
              );
            })}
          </ul>
        </div>
        <Order />
        <MenuAdmin
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
        />
      </div>
    );
  }
}

export default App;
