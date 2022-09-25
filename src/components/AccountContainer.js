import React,{useState,useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [ transactions,  setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);
  function handleFormSubmission(newtransactioninput){
        console.log(newtransactioninput)
        setTransactions((transactions)=>[...transactions,newtransactioninput])
        const configurationData =  {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newtransactioninput),
        }
        fetch("http://localhost:8001/transactions",configurationData)
         .then((response)=>response.json())
           .then(newItemTRansacted=>setTransactions(transactions=>[...transactions,newItemTRansacted]))
             .catch((error)=>{console.log(error)})
  }
  return (
    <div>
      <Search />
      <AddTransactionForm onSubmission={handleFormSubmission}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;