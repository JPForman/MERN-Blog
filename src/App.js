import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import CreateBlogEntry from './components/CreateBlogEntry';
import EditBlogEntry from './components/EditBlogEntry';



function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={Blog} />
      <Route path='/create' component={CreateBlogEntry} />
      <Route path='/edit/:id' component={EditBlogEntry} />
    </Router>

  );
}

export default App;
