import React, { Component } from 'react';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import TimeAgo from 'timeago-react';
// import timeago from 'timeago.js';
import 'react-day-picker/lib/style.css';


export class Page11 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedDay: 1991,
            wid: "100px",
           
                days: ["0", "1", "2", "3", "4", "5", "6"],
                //copy this into text area format mm/dd/yy
                arr: [
               {
                   "name":"faizan shaikh",
                   "birth":"10/01/1991"
               },{
                "name":"vidhyesh patil",
                "birth":"07/01/1992"
            },{
                "name":"bilal shaikh",
                "birth":"09/01/1993"
            },{
                "name":"vava baba",
                "birth":"03/01/1991"
            },{
                "name":"wqwq qwqw",
                "birth":"12/06/1991"
            },{
                "name":"bbb cccc",
                "birth":"12/09/1991"
            },{
                "name":"mmm ccc",
                "birth":"12/12/1991"
            }
            ],

            value:null,
            getValByDate:[],
            val:null,

        };
        this.handleDayChange = this.handleDayChange.bind(this);
    
        this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.show = this.show.bind(this);
    }
    handleDayChange(day) {
        this.setState({ selectedDay: day });

    }

    handleChangeTextArea(event) {
        this.setState({ value: event.target.value });
    }
    handleChangeDate(event) {
        this.setState({ selectedDay: event.target.value });
    }
    show() {
        // for (var i = 0; i < 6; i++) {
        //     var a = this.state.arr[i].name.length;
        var t=this.state.value
        var dates=Number(this.state.selectedDay)
        var q=JSON.parse(t);
        //   var t= Date.parse(q[2].birth)
        var o=new Date(q[0].birth);
    //    var t= Date.parse(o);
        var e=o.getFullYear()
        var arrToApend=[]
        // console.log(q,"asadasdasdasdasdasdasdasdasdasdasdasd")
    //     console.log(q.length,"asadasdasdasdasdasdasdasdasdasdasdasd")
    //     console.log(q[2].birth,"asadasdasdasdasdasdasdasdasdasdasdasd")
    //  console.log(,"asazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
//   console.log(dates,"dates")
   
        for(var i=0 ; i < q.length ; i++)
        {
            q=JSON.parse(t);
            // var t= Date.parse(q[2].birth)
            o=new Date(q[i].birth);
            e=o.getFullYear()
            var initials = q[i].name.match(/\b\w/g) || [];
            initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
              
        //console.log(o,"eeeeeeeeeeeeee")
        // console.log(o.getDay(),"dayyyyyyyyyyyyyyy")
        var p={"name":initials  ,"birth":e, "day":o.getDay()}
        
     //console.log(p,"ppppppppppppe")
    //console.log(e,"eeeeeeeeeee")
    if(e==dates){   
        arrToApend.push(p)
    }
    
    }   
    // getValByDate=arrToApend;
//    arrToApend.push(this.state.days)
        this.setState({
        getValByDate:arrToApend

        })
        console.log(this.state.getValByDate,"ttttttttttttttttt")


        //     a = 200 / 2;
        //     this.setState({
        //         wid: a
        //     })
        // }   

    }

    render() {
        var wid = "100px";

        return (

            <div>page10
{/*         
  {this.state.selectedDay && <p>Day: {this.state.selectedDay.toLocaleDateString()}</p>}
                {!this.state.selectedDay && <p>Choose a day</p>}
                <DayPickerInput onDayChange={this.handleDayChange} />

                <button onClick={this.update.bind(this)} >UPDATE</button>
               
                {this.state.selectedDay!= undefined &&
                < TimeAgo
                datetime={this.state.selectedDay}
                locale='vi'/>
                } */}





                {/* <div style={{ display: "flex", flexDirection: "row" }}>
                    {this.state.days.map(function (entry, i) {
                        return ([
                                <div key={i} style={{ width: "200px", height: "200px", border: "1px solid black" }} >
                                   <div style={{ backgroundColor: "#ae85ea", width: "100%" }}>
                                        {entry}
                                    </div>
                                    <div style={{ display: "flex" }}>
                                      
                                    </div>
                                </div>
                            ])})}</div> */}
                            
           
            
                {/* <div style={{ width: "200px", height: "200px", border: "1px solid black" }} >
                    <div style={{ backgroundColor: "lightgreen", width: "100%" }}>asdasd
                    </div >
                    <div style={{ width: this.state.wid, height: this.state.wid, background:"lightblue"}}>
                    </div>
                </div> */}




<div style={{display:"flex",flexDirection:"row"}}>





  
                <div style={{ width: "200px", height: "200px", border: "1px solid black" }} >
                    <div style={{ backgroundColor: "#ae85ea",color:"white", width: "100%" ,textAlign:"right"}}>mon
                    </div >



 {this.state.getValByDate.map(function (entry, i) {
                        return ([
                    <div style={{ width: "30px", height:"30px", background:"lightblue"}}>
                    {entry.day==1 && entry.name}
                    </div>
                          ])
                        })
                        }
                </div>



      <div style={{ width: "200px", height: "200px", border: "1px solid black" }} >
                    <div style={{ backgroundColor: "#ae85ea",color:"white", width: "100%" ,textAlign:"right"}}>tue
                    </div >
                    
 {this.state.getValByDate.map(function (entry, i) {
                        return ([
                    <div style={{ width: "30px", height:"30px", background:"lightblue"}}>
                    {entry.day==2 && entry.name}
                    </div>                   
                          ])
                        })
                        }
                </div>



     <div style={{ width: "200px", height: "200px", border: "1px solid black" }} >
                    <div style={{ backgroundColor: "#ae85ea",color:"white", width: "100%" ,textAlign:"right"}}>wed
                    </div >
                    
 {this.state.getValByDate.map(function (entry, i) {
                        return ([
                    <div style={{ width: "30px", height:"30px", background:"lightblue"}}>
                    {entry.day==3 && entry.name}
                    </div>
                    ])
                        })
                        }
                </div>


     <div style={{ width: "200px", height: "200px", border: "1px solid black" }} >
                    <div style={{ backgroundColor: "#ae85ea",color:"white", width: "100%" ,textAlign:"right"}}>thu
                    </div >
                    
 {this.state.getValByDate.map(function (entry, i) {
                        return ([
                    <div style={{ width: "30px", height:"30px", background:"lightblue"}}>
                    {entry.day==4 && entry.name}
                    </div>
                        
                          ])
                        })
                        }
                </div>




     <div style={{ width: "200px", height: "200px", border: "1px solid black" }} >
                    <div style={{ backgroundColor: "#ae85ea",color:"white", width: "100%",textAlign:"right"}}>fri
                    </div >
                    
 {this.state.getValByDate.map(function (entry, i) {
                        return ([
                    <div style={{ width: "30px", height:"30px", background:"lightblue"}}>
                    {entry.day==5 && entry.name}
                    </div>
                        
                          ])
                        })
                        }
                </div>




     <div style={{ width: "200px", height: "200px", border: "1px solid black" }} >
                    <div style={{ backgroundColor: "#ae85ea",color:"white", width: "100%",textAlign:"right" }}>sat
                    </div >
                    
 {this.state.getValByDate.map(function (entry, i) {
                        return ([
                    <div style={{ width: "30px", height:"30px", background:"lightblue"}}>
                    {entry.day==6 && entry.name}
                    </div>
                        
                          ])
                        })
                        }
                </div>
                <div style={{ width: "200px", height: "200px", border: "1px solid black" }} >
                    <div style={{ backgroundColor: "#ae85ea",color:"white", width: "100%" ,textAlign:"right"}}>sun
                    </div >
                    
 {this.state.getValByDate.map(function (entry, i) {
                        return ([
                 <div style={{ width: "30px", height:"30px", background:"lightblue"}}>
                    {entry.day==0 && entry.name
                    
                    
                    }
                    </div>
                        
                          ])
                        })
                        }
                </div>



</div>


     <div style={{ display: "flex" }}>
                 
                    <textarea value={this.state.value} onChange={this.handleChangeTextArea} style={{ width: "50%", height: "300px" }} />
                    <input value={this.state.selectedDay} pattern="[0-9]*" style={{ width: "120px", height: "40px", textAlign: "center" }} onInput={this.handleChangeDate.bind(this)}/>
                    <button onClick={this.show.bind(this)} style={{height:"40px"}} >UPDATE</button>
                </div>






            </div>
        );
    }
}
