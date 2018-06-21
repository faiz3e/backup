import React, { Component } from 'react';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import TimeAgo from 'timeago-react';
// import timeago from 'timeago.js';
import 'react-day-picker/lib/style.css';


export class Page10 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedDay: 1991,
            wid: "100px",
            mon: [],
            tue: [],
            wed: [],
            thu: [],
            fri: [],
            sat: [],
            sun: [],

            days: ["0", "1", "2", "3", "4", "5", "6"],
            //copy this into text area format mm/dd/yy
            arr:[ { "name":"faizan shaikh", "birth":"10/01/1991" },
            { "name":"vidhyesh patil", "birth":"07/01/1992" },
            { "name":"bilal shaikh", "birth":"09/01/1993" },
            { "name":"vava baba", "birth":"03/01/1991" },
            { "name":"wqwq qwqw", "birth":"12/06/1991" },
            { "name":"bbb cccc", "birth":"12/09/1991" },
            { "name":"mmm ccc", "birth":"12/12/1991" },
            { "name":"mmm ccc", "birth":"12/12/1991" } ,
            { "name":"mmm ccc", "birth":"12/12/1991" },
            { "name":"mmm ccc", "birth":"12/12/1991" } ,
            { "name":"mmm ccc", "birth":"12/12/1991" }
        ],

            value: null,
            getValByDate: [],
            val: null,

        };


        this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
          this.handleChangeDate = this.handleChangeDate.bind(this);
        this.show = this.show.bind(this);
    }


    handleChangeTextArea(event) {
        this.setState({ value: event.target.value });
    }
    handleChangeDate(event) {
        this.setState({ selectedDay: event.target.value });
    }
    show() {
        var t = this.state.value
        var dates = Number(this.state.selectedDay)
        var q = JSON.parse(t);
        //   var t= Date.parse(q[2].birth)
        var o = new Date(q[0].birth);
        //    var t= Date.parse(o);
        var e = o.getFullYear()
        var arrToApend = []
        var sun = [];
        var mon = [];
        var tue = [];
        var wed = []
        var thu = [];
        var fri = [];
        var sat = [];

        // console.log(q,"asadasdasdasdasdasdasdasdasdasdasdasd")
        //     console.log(q.length,"asadasdasdasdasdasdasdasdasdasdasdasd")
        //     console.log(q[2].birth,"asadasdasdasdasdasdasdasdasdasdasdasd")
        //  console.log(,"asazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
        //   console.log(dates,"dates")

        for (var i = 0; i < q.length; i++) {
            q = JSON.parse(t);
            o = new Date(q[i].birth);
            e = o.getFullYear()
            var initials = q[i].name.match(/\b\w/g) || [];
            initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
            var p = { "name": initials, "birth": e, "day": o.getDay(), col: this.color() }
            //console.log(p,"ppppppppppppe")
            //console.log(e,"eeeeeeeeeee")
            if (e == dates) {
                arrToApend.push(p)
            }
            if (o.getDay() == 0) {
                console.log(o, "got it 0")
                sun.push(p)
            }
            if (o.getDay() == 1) {
                console.log(o, "got it 1")
                mon.push(p)
            }
            if (o.getDay() == 2) {
                console.log(o, "got it2")
                tue.push(p)
            }
            if (o.getDay() == 3) {
                console.log(o, "got it 3")
                wed.push(p)
            }
            if (o.getDay() == 4) {
                console.log(o, "got it 4")
                thu.push(p)
            }
            if (o.getDay() == 5) {
                console.log(o, "got it 5")
                fri.push(p)
            }
            if (o.getDay() == 6) {
                console.log(o, "got it 6")
                sat.push(p)
            }
        }

        this.setState({
            getValByDate: arrToApend, mon: mon, tue: tue, wed: wed, thu: thu, fri: fri, sat: sat, sun: sun

        })
        console.log(this.state.getValByDate, "arr")
        console.log(this.state.wed, "wwww")
    }
    color() {
        var color = '#' + Math.random().toString(16).substr(-6);
        return color;
    }
    chk(thenumbr) {
        var toret = 1;
        if (thenumbr > 100)
            toret = 11
        if (thenumbr >= 82 && thenumbr <= 100)
            toret = 10
        if (thenumbr >= 65 && thenumbr <= 81)
            toret = 9
        if (thenumbr >= 50 && thenumbr <= 64)
            toret = 8
        if (thenumbr >= 37 && thenumbr <= 49)
            toret = 7
        if (thenumbr >= 26 && thenumbr <= 36)
            toret = 6
        if (thenumbr >= 17 && thenumbr <= 25)
            toret = 5
        if (thenumbr >= 10 && thenumbr <= 16)
            toret = 4
        if (thenumbr >= 5 && thenumbr <= 9)
            toret = 3
        if (thenumbr >= 2 && thenumbr <= 4)
            toret = 2
        if (thenumbr == 1)
            toret = 1

        return toret
    }
    render() {
        var monlen = 200 / (this.chk(this.state.mon.length));
        wedlen = wedlen + "px";
        var tuelen = 200 / (this.chk(this.state.tue.length));
        tuelen = tuelen + "px";
        var wedlen = 200 / (this.chk(this.state.wed.length));
        wedlen = wedlen + "px";
        var thulen = 200 / (this.chk(this.state.thu.length));
        thulen = thulen + "px";
        var frilen = 200 / (this.chk(this.state.fri.length));
        frilen = frilen + "px";
        var satlen = 200 / (this.chk(this.state.sat.length));
        satlen = satlen + "px";
        var sunlen = 200 / (this.chk(this.state.sun.length));
        sunlen = sunlen + "px";
        var color = '#' + Math.random().toString(16).substr(-6);
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


                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                    <div style={{ width: "202px", height: "225px", border: "1px solid black", display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }} >
                        <div style={{ backgroundColor: "#ae85ea", color: "white", width: "100%", textAlign: "right", height: "25px" }}>mon
                    </div >
                        {this.state.mon.map(function (entry, i) {
                            return ([
                                <div style={{ width: monlen, height: monlen, background: entry.col, display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                                    {entry.day == 1 && entry.name}
                                </div>
                            ])
                        })
                        }
                    </div>
                    <div style={{ width: "202px", height: "225px", border: "1px solid black", display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }} >
                        <div style={{ backgroundColor: "#ae85ea", color: "white", width: "100%", textAlign: "right", height: "25px" }}>tue
                    </div >

                        {this.state.tue.map(function (entry, i) {
                            return ([
                                <div style={{ width: tuelen, height: tuelen, background: entry.col, display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                                    {entry.day == 2 && entry.name}

                                </div>
                            ])
                        })
                        }
                    </div>
                    <div style={{ width: "202px", height: "225px", border: "1px solid black", display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }} >
                        <div style={{ backgroundColor: "#ae85ea", color: "white", width: "100%", textAlign: "right", height: "25px" }}>wed
                    </div >
                        {this.state.wed.map(function (entry, i) {
                            return ([
                                <div style={{ width: wedlen, height: wedlen, background: entry.col, display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                                    {entry.day == 3 && entry.name}

                                </div>
                            ])
                        })
                        }
                    </div>
                    <div style={{ width: "202px", height: "225px", border: "1px solid black", display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }} >
                        <div style={{ backgroundColor: "#ae85ea", color: "white", width: "100%", textAlign: "right", height: "25px" }}>thu
                    </div >
                        {this.state.thu.map(function (entry, i) {
                            return ([
                                <div style={{ width: thulen, height: thulen, background: entry.col, display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                                    {entry.day == 4 && entry.name}
                                </div>

                            ])
                        })
                        }
                    </div>
                    <div style={{ width: "202px", height: "225px", border: "1px solid black", display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }} >
                        <div style={{ backgroundColor: "#ae85ea", color: "white", width: "100%", textAlign: "right", height: "25px" }}>fri
                    </div >
                        {this.state.fri.map(function (entry, i) {
                            return ([
                                <div style={{ width: frilen, height: frilen, background: entry.col, display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                                    {entry.day == 5 && entry.name}
                                </div>
                            ])
                        })
                        }
                    </div>
                    <div style={{ width: "202px", height: "225px", border: "1px solid black", display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }} >
                        <div style={{ backgroundColor: "#ae85ea", color: "white", width: "100%", textAlign: "right", height: "25px" }}>sat
                    </div >

                        {this.state.sat.map(function (entry, i) {
                            return ([
                                <div style={{ width: satlen, height: satlen, background: entry.col, display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                                    {entry.day == 6 && entry.name}

                                </div>
                            ])
                        })
                        }
                    </div>
                    <div style={{ width: "202px", height: "225px", border: "1px solid black", display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }} >
                        <div style={{ backgroundColor: "#ae85ea", color: "white", width: "100%", textAlign: "right", height: "25px" }}>sun
                    </div >
                        {this.state.sun.map(function (entry, i) {
                            return ([
                                <div style={{ width: sunlen, height: sunlen, background: entry.col, display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                                    {entry.day == 0 && entry.name
                                    }
                                </div>
                            ])
                        })
                        }
                    </div>
                </div>
                <div style={{ display: "flex" }}>

                    <textarea value={this.state.value} onChange={this.handleChangeTextArea} style={{ width: "50%", height: "300px" }} />
                    <input value={this.state.selectedDay} pattern="[0-9]*" style={{ width: "120px", height: "40px", textAlign: "center" }} onInput={this.handleChangeDate.bind(this)} />
                    <button onClick={this.show.bind(this)} style={{ height: "40px" }} >UPDATE</button>
                </div>
            </div>
        );
    }
}
