import React, { Component } from 'react';
import CheckboxTree from 'react-checkbox-tree';
export class Page6 extends Component{


constructor(props) {
   super(props);



this.state = {
          checked: [],
          expanded: [],
          checked1: [],
          expanded1: [],

           nodes : [{
                value: 'mars',
                label: 'Mars',
                children: [
                    { value: 'phobos', label: 'Phobos',children: [  { value: 'gggg', label: 'gggg' },  { value: 'bbbb', label: 'bbbbb' },] },
                    { value: 'deimos', label: 'Deimos' },
                ],
            }],
            nodes1 : [{
                 value: 'juipter',
                 label: 'juipter',
                 children: [
                     { value: 'aasd', label: 'ssss',children: [  { value: 'deimos', label: 'ffff' },  { value: 'ffff', label: 'wwww' },] },
                     { value: 'rrrr', label: 'rrrr' },
                 ],
             }],


      };

}


  render() {
    return (<div>page6

    <CheckboxTree
              nodes={this.state.nodes}

                    checked={this.state.checked}
                    expanded={this.state.expanded}
                    onCheck={checked => this.setState({ checked })}
                    onExpand={expanded => this.setState({ expanded })}

                />
                 {console.log(this.state.nodes,"asdasdasdas")}

                 <CheckboxTree
                           nodes={this.state.nodes1}

                                 checked={this.state.checked1}
                                 expanded={this.state.expanded1}
                                 onCheck={checked1 => this.setState({ checked1 })}
                                 onExpand={expanded1 => this.setState({ expanded1})}

                             />







                 </div>
    );
  }
}
