import React from 'react'
import Menu from '../components/Menu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from '../components/Footer';
import { HomeScreen } from '../screens/HomeScreen';
import { BlogScreen } from '../screens/BlogScreen';
import { ProductsScreen } from '../screens/ProductsScreen';
import { ScreenPageNotFound } from '../screens/ScreenPageNotFound';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

export const RouterPage = () => {
    return (
        <div>
            <Router>
                <Menu />
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route path="/products">
                        <ProductsScreen />
                    </Route>
                    <Route path="/blogs">
                        <BlogScreen />
                    </Route>
                    <Route path="/cart">
                        <CartScreen />
                    </Route>
                    <Route path="/checkout">
                        <CheckoutScreen />
                    </Route>
                    <Route path="*">
                        <ScreenPageNotFound />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}
