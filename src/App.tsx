import * as React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/pages/DashboardPage'
import Details from './components/pages/DetailsPage';
import EditPage from './components/pages/EditPage';



class App extends React.Component {
  render() {
    return (
      <div>
        <Header header="Some cool films"/>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/film/:id' component={Details}/>
        <Route exact path='/film/:id/edit' component={EditPage}/>
      </div>
    );
  }
}

export default App;
