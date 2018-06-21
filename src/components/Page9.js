import React, { Component } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import DatePicker from 'react-datepicker';

import TimeAgo from 'timeago-react';
import timeago from 'timeago.js';
export class Page9 extends Component{


constructor(props) {
   super(props);



this.state = {
 
  initialItems: [
       "Apples",
       "Broccoli",
       "Chicken",
       "Duck",
       "Eggs",
       "Fish",
       "Granola",
       "Hash Browns"
     ],

      };
  items: [],

  this.filterList=this.filterList.bind(this);
}
handleChange(){
}



filterList(event){
   var updatedList = this.state.initialItems;
   updatedList = updatedList.filter(function(item){
     return item.toLowerCase().search(
       event.target.value.toLowerCase()) !== -1;
   });
   this.setState({items: updatedList});
 }

  render() {
    return (<div>
      page9
      <div className="filter-list">
     <form>
     <fieldset className="form-group">
     <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList.bind(this)}/>
     </fieldset>
     </form>
   <select>
    <option value="1" value={this.state.initialItems[1]}></option>
    </select>
   </div>


<TimeAgo
  datetime={'Thu Apr 5 2018 14:22:59 GMT+0400'} 
  locale='vi' />



                 </div>
    );
  }
}
