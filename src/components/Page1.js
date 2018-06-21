import React, { Component } from 'react';

export class Page1 extends Component {

 constructor(props) {
 super(props);
 this.removerec=this.removerec.bind(this);
 this.editrec=this.editrec.bind(this);
 this.tst = this.tst.bind(this);
 this.state = {
 data: [],
 }
 }


 removerec(index,i)
 {
console.log(index,"id")
 let data=this.state.data;
console.log(data);
data.splice(i,1);
this.setState({
data:data
});

console.log("data del from view");
if(index!=undefined){
let url="http://gentle-coast-86971.herokuapp.com/movie";
 return fetch(url + '/' + index, {
 method: 'delete'
 }).then(response => response.json());
 console.log("data del from database");}
}

editrec(index,i){
 let rec=this.state.data;
 let myrec=rec.find(function(rec){
 return rec._id === index
});
console.log(myrec._id);
console.log(i,"posi at current rec");
var newtitle = prompt("Please enter title",myrec.title);
var newurl = prompt("Please enter url",myrec.url);
if(newtitle && newurl){
var newdata ={_id:myrec._id,title:newtitle,url:newurl};
console.log(newdata);
 fetch('http://gentle-coast-86971.herokuapp.com/movie/'+index, {
 method: 'PUT',
 headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
 body: JSON.stringify(newdata)
 })
 .then(res => res.json())
 console.log(rec[i],"rec[i]")
 console.log(newdata,"newdata")
rec[i]=newdata;
console.log(rec,"rec");
this.setState({
newdata:myrec
})
}


}



 tst(index){
 if(this.refs.title.value==="" &&this.refs.url.value===""){
 alert("Don't Leave any field empty!");
}
else
{
 let rec=this.state.data;
 let counter= this.state.counter;
 var titles =this.refs.title;
 var tests = titles.value;
 var url = this.refs.url.value;
 var postdata ={title:tests,url:url};
 console.log(postdata);
 fetch('http://gentle-coast-86971.herokuapp.com/movie', {
 method: 'POST',
 headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
 body: JSON.stringify(postdata)
 }).then(res => res.json())
 .then((responseJson) => {
 rec.push(responseJson);
 this.setState({data:rec})
console.log(responseJson,"responseJson")
})
console.log("data added in view");
this.refs.title.value="";
this.refs.url.value="";
}
}
 componentDidMount() {
 return fetch('http://gentle-coast-86971.herokuapp.com/movie')
 .then((response) => response.json())
 .then((responseJson) => {
 this.setState({
 data:responseJson
 })
 console.log(this.state.data)
 })
 }
 componentDidUpdate() {
    this._commitAutoSave();
  }
  _commitAutoSave = () => {
    fetch('http://gentle-coast-86971.herokuapp.com/movie', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        }).then(res => res.json())
        .then((responseJson) => {
     data:this.data}
    );
    console.log("update????");
  }

 render(){
 return(
<div>Page1
 <form ref="clrForm"><br/>
 TITLE :<input type="text" ref="title"/>
 URL : <input type="text" ref="url"/>
 </form>
 <br/>
 <button className="btn-success" onClick={this.tst.bind(this)}>ADD</button>
<br/><br/>
 <table className="table table-bordered">
 <thead>
 <tr>
 <th>SR.No</th>
 <th>ID</th>
 <th>TITLE</th>
 <th>URL</th>
 <th>OPERATION</th>
 </tr>
 </thead>
 <tbody>

 {this.state.data.map((dynamicData,i)=>
 <tr key={i}><td>{i+1}</td><td>{dynamicData._id}</td>
 <td>
<input  type="text" value={dynamicData.title} ></input>
 </td><td>
 {dynamicData.url}</td><td>
 <button className="btn-info" onClick={this.editrec.bind(null,dynamicData._id,i)}>EDIT</button>
 <button className="btn-danger" onClick={this.removerec.bind(null,dynamicData._id,i)}>Delete</button>
 </td></tr>)
 }
 </tbody></table>
 </div>
 )
 }
 }
