import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './styles/animateBorder.css'
import './styles/main-styles.scss';
import './App.css';
import './styles/Preloader.scss'
import './bootstrap.min.css';
import {HomePage} from "./client/pages/HomePage/HomePage";
import {AdminPage} from "./client/components/Products";
import GoogleMapsAdminPage from "./client/components/GoogleMapsAdminPage/GoogleMapsAdminPage";
import {Provider} from "react-redux";
import {store} from "./store/store";
import "./styles/buttons-inputs-styles.css"
import './styles/benefits.scss'
import './styles/imgs.css'
import NewsAdminPage from "./client/components/News/NewsAdminPage";
import HeaderHoc from "./HOC/headerHoc";

function App() {

  return (
      <Router>
        <Provider store={store}>
          <Route exact path='/'><HomePage/></Route>
          <Route exact path='/AdminPage'><HeaderHoc><AdminPage/></HeaderHoc></Route>
          <Route exact path='/NewsAdminPage'><HeaderHoc><NewsAdminPage/></HeaderHoc></Route>
          <Route exact path='/GoogleMapsAdminPage'><HeaderHoc><GoogleMapsAdminPage/></HeaderHoc></Route>
          {/*google-maps-key: AIzaSyABwpKfqjcCgsGGcFY2dhpb02HUPt_U4vk*/}
        </Provider>
      </Router>
  )
}

export default App;
