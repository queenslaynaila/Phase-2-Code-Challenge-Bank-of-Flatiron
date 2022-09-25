import React,{useState,useEffect} from "react";

function Transaction() {
  const [ transaction,  setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);
 
  const eachTransaction = transaction.map((single)=>{
    return  (
      <React.Fragment key={single.id}>
        <tr>
          <td>{single.date}</td>
          <td>{single.description}</td>
          <td>{single.category}</td>
          <td>{single.amount}</td>
        </tr>
      </React.Fragment>
    )
  })
  
   
  return (
    <>
      {eachTransaction}
    </>
  );
}

export default Transaction;
