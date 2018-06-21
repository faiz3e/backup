import React, { Component } from 'react';

export class Page8 extends Component {

   constructor(props) {
   super(props);
   this.removerec=this.removerec.bind(this);
   this.editrec=this.editrec.bind(this);
   this.addrec = this.addrec.bind(this);
   this.state = {
   data: [],
   }
   }




    removerec(index,i){
      console.log(index,"id")
       let data=this.state.data;
      console.log(data);
      data.splice(i,1);
      this.setState({
      data:data
      });

      console.log("data del from view");
      if(index!=undefined){
      let url="http://localhost:4000/FlatOwner";
       return fetch(url + '/' + index, {
       method: 'delete'
       }).then(response => response.json());
       console.log("data del from database");}
    }
    editrec(index,i){}

       addrec(index){

         if(this.refs.name.value==="" &&this.refs.flatNo.value===""  &&this.refs.phnNumb.value)
        {

         alert("Don't Leave any field empty!");

        }
        else
        {
         let rec=this.state.data;
         let counter= this.state.counter;
         var name =this.refs.name.value;
         var flatNo =this.refs.flatNo.value;
         var phnNumb =this.refs.phnNumb.value;
         var floorNo =123;
         var fmyCount =2;
         var postdata ={flatNo:flatNo,name:name,phnNumb:phnNumb,floorNo:floorNo,fmyCount:fmyCount};
         console.log(postdata);
         fetch('http://localhost:4000/FlatOwner', {
         method: 'POST',
         headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
         body: JSON.stringify(postdata)
         })
         .then((responseJson) => {
         rec.push(responseJson);
         this.setState({data:rec})
        console.log(responseJson,"responseJson")
            console.log(this.state.data,"data")
        })
        console.log("data added in view");
        this.refs.phnNumb.value="";
        this.refs.flatNo.value="";
        this.refs.phnNumb.value="";

        }
       }

 componentDidMount() {
   return fetch('http://localhost:4000/FlatOwner')
   .then((response) => response.json())
   .then((responseJson) => {
   this.setState({
   data:responseJson
   })
   console.log(this.state.data)
   })
 }

  componentDidUpdate() {}










  render() {
    return (
      <div>page8
       <form ref="clrForm"><br/>
       TITLE :<input type="text" ref="flatNo"/>
       URL : <input type="text" ref="name"/>
            URL : <input type="text" ref="phnNumb"/>
       </form>
       <br/>
       <button className="btn-success" onClick={this.addrec.bind(this)}>ADD</button>
      <br/><br/>
       <table className="table table-bordered">
       <thead>
       <tr>
       <th>SR.No</th>
       <th>Flat no </th>
       <th>name</th>
       <th>phnNumb</th>
       <th>OPERATION</th>
       </tr>
       </thead>
       <tbody>

       {this.state.data.map((dynamicData,i)=>
       <tr key={i}>
       <td>{i+1}</td>
       <td>{dynamicData.flatNo}</td>
       <td>{dynamicData.name}</td>
       <td>{dynamicData.phnNumb}</td>
       <td>
       <button className="btn-info" onClick={this.editrec.bind(null,dynamicData._id,i)}>EDIT</button>
       <button className="btn-danger" onClick={this.removerec.bind(null,dynamicData._id,i)}>Delete</button>
       </td>
       </tr>)
       }
       </tbody></table>
       </div>
    );
  }
}
