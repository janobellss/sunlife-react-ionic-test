import React from 'react';
import { 
  IonApp, 
  // IonContent, 
  IonRouterOutlet 
} from '@ionic/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import PolicyServicing from './components/PolicyServicing/PolicyServicing';
import Policies from './components/Policies/Policies';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  // <IonApp>
  //   <Home />
  //   <PolicyServicing />
  //   <Policies />
  // </IonApp>

  <Router>
    <IonApp>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/policyservicing" component={PolicyServicing} />
        <Route path="/policies" component={Policies} />
      </IonRouterOutlet>
    </IonApp>
  </Router>
);

export default App;