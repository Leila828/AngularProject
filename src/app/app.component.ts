import { Component } from '@angular/core';
import {Service1Service} from './Service1.Service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(monS: Service1Service) {
monS.DireBonjour();

}
public pers = {nom: 'ali', prenom: 'mohamed', age: '22'};

public fruits = [{nom: 'pomme', img: 'assets/jkhh.jpg'}, {nom: 'banan'}, {nom: 'ananas'}];



public v = '';

public monStyle = {
backgroundColor: 'yellow',
color: 'blue'
};
public val = true;
public valeur = true;
  title = 'Lila';
  monS: any;
public fc() {
alert('col1');
}
public fd() {
if (this.valeur === true) {
this.valeur = false; } else {
if (this.valeur === false) {
this.valeur = true; }
}
alert('col1');
}


}
