
// import Expenseitem from './components/Expenseitem';
import Expenses from './components/Expenses';
// import Expenseitem from './components/Expenseitem'; // Check the correct path to the component



//MAKE A COMPONENT
function App() {
     let expenses = [
          {
               id:'e1',
               title:'school fee',
               amount:250,
               date:new Date(2021, 3, 28)
          },
          {
               id:'e2',
               title:'books',
               amount:230,
               date:new Date(2021, 5, 12)
          },
          {
               id:'e3',
               title:'house rent',
               amount:200,
               date:new Date(2021, 9, 18)
          },
          {
               id:'e4',
               title:'foods',
               amount:210,
               date:new Date(2021, 6, 13)
          }
     ];
     
  return(
     //   <div className="app-container">
     //        <h3>first component</h3>
     //         <p>this is a p tag</p>
     //    </div>
        //pass jsx  //if we want to add 2 tag then place them inside div tag
        //props is used to pass data and vales from one  component to another to get dyanamic and unique output.
       <div>
          <h2>START</h2>
          <Expenses item={expenses}/>
          </div> 
        ); 



}
//jsx-->html ko is tarike se improve kiya gaya kiya hai ki hame usea as a string pass nhi karna hota h direct javascript me html likh sakte h


//props-->how to pass data inside component

export default App;
