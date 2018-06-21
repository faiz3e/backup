import React, { Component } from 'react';
import CheckboxTree from 'react-checkbox-tree';
export class Page7 extends Component{


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
    return (<div>page2222
      <li>

             <div class="loader-3 center"><span></span></div>
           </li>

     </div>
    );
  }
}
