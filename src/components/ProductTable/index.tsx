import React from "react";
import Table from 'react-bootstrap/Table';

interface ProductTable {
    filteredProducts: any[] | null
    selectedType: string
    handleTypeSelection: (param: any) => any
}

const ProductTable: React.FC<ProductTable> = ({filteredProducts, selectedType, handleTypeSelection}) => {

  const typeFilter = () => (
    <label>
      <select value={selectedType} onChange={(e) => handleTypeSelection(e)}>
        <option value="D">Dried fruit</option>
        <option value="F">Fruit</option>
        <option value="V">Vegetable</option>
        <option value="H">Herb</option>
        <option value="None">See all</option>
      </select>
    </label>
  )

  const typeTraducer = (key: string) => {
    return {
      'D': 'Dried fruit',
      'F': 'Fruit',
      'V': 'Vegetable',
      'H': 'Herb'
    }[key];
  }

    return(

    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>
          <p>type {typeFilter()}</p>
        </th>
        <th>
          <p>Code</p>
        </th>
        <th>
          <p>Commodity</p>
        </th>
        <th>
          <p>Variety</p>
        </th>
      </tr>
      </thead>

    <tbody>
      {filteredProducts?.map((product, index) => 
        <tr key={index}>
        <td >
          {typeTraducer(product.T)}
        </td>
        <td >
          {product.PLU}
        </td>
        <td >
          {product.CM}
        </td>
        <td >
          {product.VA}
        </td>
        </tr>
      )}
    </tbody>
    </Table>

)
}

export default ProductTable;