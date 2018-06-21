import React, { Component } from 'react';
import {Grid,Row,Col,MenuItem,DropdownButton} from 'react-bootstrap';
export class Page2 extends Component {
 constructor(props) {
 super(props);
 this.editrec=this.editrec.bind(this);
 this.remove=this.remove.bind(this);
 this.minus=this.minus.bind(this);
 this.plus=this.plus.bind(this);
 this.toggle=this.toggle.bind(this);
 this.finder=this.finder.bind(this);
 this.state = {
 data: null,
 cart:[],
 total:0,
 filter:[],
 per:[]
 }
}
finder(event){
var temp,res,data=this.state.data;
var j=0;var rec=[];
  temp=event.target.value;
  temp=temp.toLowerCase();
  if(event.target.value.length===0){
  }
  for(var i=0 ; i<this.state.per.length;i++){
  res =this.state.per[i].title.toLowerCase().search(temp)
if(res===-1){}
else{
rec[j]=this.state.per[i];
j+=1;
}}
 this.setState({
data:rec
});
}



plus(index,i){
 let cart1=this.state.cart;
 let total1=this.state.total;
 this.state.cart[i].quan+=1;
 total1=total1+ this.state.cart[i].price ;
 this.setState({
 cart:cart1,
 total:total1
 });

}

remove(index,i){
 let cart1=this.state.cart;
 let total1=this.state.total;
 total1=total1- (this.state.cart[i].price*this.state.cart[i].quan);
 cart1.splice(i,1);
 this.setState({
 cart:cart1,
 total:total1
 });
}

minus(index,i){
 let cart1=this.state.cart;
 let total1=this.state.total;
 if(this.state.cart[i].quan>1){
 this.state.cart[i].quan-=1;
 total1=total1- this.state.cart[i].price ;
 this.setState({
 cart:cart1,
 total:total1
 });
}
}

editrec(index,i){
 let rec=this.state.data[i].id;
 let cartrec= this.state.cart;
 var itemsquantity =1;
 var grandtotal=0;
 var found = cartrec.find(function(element) {
 return element.id=== rec ;
 });
 if(found!==undefined)
 {
this.state.data[i].quan=this.state.data[i].quan+1;
} else{
this.state.data[i].quan=itemsquantity;
 this.state.cart.push(this.state.data[i]);
}
this.setState({
cartrec:cartrec
})
var count = Object.keys(cartrec).length;
 for(var x=0;x<count;x++){
 grandtotal=grandtotal+this.state.cart[x].price*this.state.cart[x].quan;
 }
 this.setState({
 total:grandtotal
 })
}






toggle(event) {
var x=0;
var currentarry=[];
         var found = this.state.filter.find(function(element) {
         return element===event.target.value;
         });
               if(found===undefined){
               this.state.filter.push(event.target.value);
               for(var k=0;k<this.state.filter.length;k++)
               for(var j=0;j<this.state.per.length;j++){
              if(this.state.per[j].title===this.state.filter[k] || this.state.per[j].ptype===this.state.filter[k]){
               currentarry.push(this.state.per[j]);
              }
              }
              this.state.data=currentarry;
               this.setState({
               filter:this.state.filter
               })
               }
           else{
             var pos=-1;
             var found = this.state.filter.find(function(element) {
               pos+=1
             return element===event.target.value;
             });
           this.state.filter.splice(pos,1);
           this.setState({
           filter:this.state.filter
           })
           for(var k=0;k<this.state.filter.length;k++)
           for(var j=0;j<this.state.per.length;j++)
           {
           if(this.state.per[j].title===this.state.filter[k] || this.state.per[j].ptype===this.state.filter[k]){
          currentarry.push(this.state.per[j]);
           }
           }
        }
        if(this.state.filter.length===0){
            currentarry=this.state.per;
        }
    this.state.data=currentarry;
 }










 componentDidMount() {
 return fetch('http://localhost:4000/db')
 .then((response) => response.json())
 .then((responseJson) => {
 this.setState({
 data:responseJson.products
 })
 this.setState({
 per:responseJson.products
 })
 })
 }




 render(){
 return(
   <div className="center-content">page2
 <Row>

 <Col xs={8} sm={8} lg={8}>

{
  this.state.data && this.state.data.map((dynamicData,i)=>
 <Col id="cent" xs={4} sm={4} lg={4}>
 <img src={dynamicData.image} alt="Avatar"/>
 <div className="container">
 <h4><b>{dynamicData.title}</b></h4>
 <p>Rs{dynamicData.price}</p>
 <button className="btn" onClick={this.editrec.bind(null,dynamicData.id,i)}>
 <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true">
 </span>
 Add
 </button>
 </div>
 <hr/>
 </Col>
)}

 </Col>

 </Row>

</div>
 );
}
}
