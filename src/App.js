import React, { Fragment } from 'react';
//components
import {GlobalStyle} from './globalstyle';
// import Navbar from './components/Navbar';
// import Main from './components/MainLayout';
// import Header from './components/HeaderBackground';
// import Section from './components/SectionBackground';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/HeaderBackground';
import ManifestoView from './components/ManifestoView';
import CardsView from './components/CardsView';
import Dashboard from './components/DashboardView';
import NotFoundPage from './components/NotFoundView';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ManifestoView />
//       </div>
//     );
//   }
// }


export const AppWrapper = () => (

  <BrowserRouter>
    <React.Fragment>
    <GlobalStyle body />
      <Navbar />
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ManifestoView}/>
        <Route exact={true} path="/card/:id" component={CardsView} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>





)


// <Navbar />
// <Header />
// <Main />
// <Section />
// export default App;
