import './Expenses.css';
import Expenseitem from './Expenseitem';
function Expenses(props){
    return(
    <div>
    
<Expenseitem 
    date={props.item[0].date} 
    title={props.item[0].title}
    amount={props.item[0].amount}>
</Expenseitem>
<Expenseitem 
    date={props.item[1].date}
    title={props.item[1].title}
    amount={props.item[1].amount}>
</Expenseitem>
<Expenseitem 
    date={props.item[2].date} 
    title={props.item[2].title}
    amount={props.item[2].amount}>
</Expenseitem>
<Expenseitem 
    date={props.item[3].date}
    title={props.item[3].title}
    amount={props.item[3].amount}>
</Expenseitem>

</div> 
 );
}
export default Expenses;