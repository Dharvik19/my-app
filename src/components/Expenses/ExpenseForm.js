import React from "react";
function ExpenseForm() {
    const titleChangeHandler = (e)=>{
        console.log(e.target.value);
    }
  return (
    <>
      <form>
        <label>
          title:
          <input type="text" name="name" onChange={titleChangeHandler}/>
        </label>
        <label>
          Amount:
          <input type="text" name="amount" />
        </label>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default ExpenseForm;
