import React, { Component } from 'react';

export class Leftpanel extends Component {
  constructor(props) {
 super(props);
 this.toggle=this.toggle.bind(this);
 this.finder=this.finder.bind(this);
}

finder(){}
toggle(){}
  render() {
    return (
      <div className="Leftpanel">
      LEFTPANEL
 <p className="text-bold">Search</p>
 <input type="text" id="inputserch" onChange={this.finder.bind(this)}></input>
 <br></br><h5><b>Filter by Types</b></h5>
 <a href="#" onClick={this.toggle.bind(this)}> <p>Smart phones</p></a>
 <a href="#"  name="types" value="iphone" onClick={this.toggle.bind(this)}> <p>Feature phones</p></a>

 <h5><b>Filter by Brands</b></h5>
 <a href="#" name="brands" value="Apple" onClick={this.toggle.bind(this)}><p> Apple</p></a>
 <p><input type="checkbox" name="brands" value="Samsung JS" onClick={this.toggle.bind(this)}></input> Samsung</p>
 <p><input type="checkbox" name="brands" value="Nokia" onClick={this.toggle.bind(this)}></input> Nokia</p>
 <p><input type="checkbox" name="brands" value="Micromax" onClick={this.toggle.bind(this)}></input> Micromax</p>
 <p><input type="checkbox" name="brands" value="Motorola" onClick={this.toggle.bind(this)}></input> Motorola</p>

 <h5><b>Filter by Operating System</b></h5>
 <p><input type="checkbox" name="os" value="smartphone" onClick={this.toggle.bind(this)}></input> Android</p>
 <p><input type="checkbox" name="os" value="iphone" onClick={this.toggle.bind(this)}></input> Ios</p>
</div>
    );
  }
}
