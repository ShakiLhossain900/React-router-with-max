import { Route,Switch,Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>

        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products' exact>
          <Products />
        </Route>
        {/* :productId  this is a dynamic sagment*/}
        <Route path='/products/:productId'> 
          <ProductDetail />
        </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book


//this basic project done upto 011 video module 011 redirecting the user 

