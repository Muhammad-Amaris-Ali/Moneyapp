import React from 'react';
import { Heading} from './components/Heading';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalContextProvider } from './context/GlobalState';
import {GlobalProvider} from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Heading />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
