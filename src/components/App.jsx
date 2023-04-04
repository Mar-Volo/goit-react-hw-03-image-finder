import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import FetchImages from './FetchAPI/FetchImages';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';


let page = 1;

export class App extends Component {
  state = {
    searchQery: '',

  }

  
   render () {
     return (
       <Layout>
         <SearchBar/>
         <GlobalStyle/>
       </Layout>
     );
  }
};
