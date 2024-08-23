import React from 'react';
import Header from './components/Header';
import DataTable from './components/DataTable';
import WorkflowSidebar from './components/WorkflowSidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <div className="main-content">
        <DataTable />
      </div>
      </div>
      <div>
      <WorkflowSidebar />
      </div>
    </div>
  )
}

export default App;
