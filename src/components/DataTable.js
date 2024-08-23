import React, { useState } from 'react';
import jsonData from '../sample.json';

const DataTable = () => {
    const headers = jsonData.table_headers;
    const data = jsonData.table_data;
    const [columnTypes, setColumnTypes] = useState({
      territory: 'String',
      date: 'String',
      units: 'Int',
      averageUnit: 'Float',
      tvTotal: 'Float',
      videoOnDemand: 'Float',
      proofOfConcept: 'Float',
      printSpend: 'Float'
    });
    const handleTypeChange = (column, event) => {
      setColumnTypes({
        ...columnTypes,
        [column]: event.target.value
      });
    };
    const dataTypes = [
      "String","Int","Float"
    ]

    return ( 
      <div className = "data-table">
        <div className='row_head'>
          <div>
          <button>PROJECT NAME</button>
          <span>ETL New Demo2</span>
          <button>OUTPUT DATASET NAME</button>
          <span>ETL N_D2</span>
          <button>LAST RUN</button>
          <span>Not Available</span>
          </div>
          <div>
            <span>Rows: 500</span>
          </div>
        </div>
        <hr></hr>
        <br></br>
        <div style={{overflowX:"auto"}}>
        <table>
        <thead>
        <tr> {
            headers.map((header, index) => ( 
             <th key={index}>
                  {header.name}
                  
                </th>
            ))
        } 
        </tr> 
        <tr>
                            {
                                headers.map((header, index) => (
                                    <th key={index}>
                                        <select
                                            value={columnTypes[header.name]}
                                            onChange={(e) => handleTypeChange(header.name, e)}
                                        >
                                            {dataTypes.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </th>
                                ))
                            }
                        </tr>
        </thead> 
        <tbody> 
          {
            data.map((row, rowIndex) => ( 
              <tr key = { rowIndex } > {
                    row.map((item, colIndex) => ( 
                      <td key = { colIndex } > { item } 
                      </td>
                    ))
                } 
              </tr>
            ))
        } 
        </tbody> 
        </table>
        </div> 
        </div>
    )
}

export default DataTable;
