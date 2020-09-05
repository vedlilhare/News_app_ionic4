import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, Events } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';


const themes = {
  Autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876',
    white: '#ffff'
  },
  Night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867',
    white: '#ffff'
  },
  Neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A',
    white: '#ffff'
  },
  Default:{
    primary: '#f9197e',
  },
  Dark:{
    primary: '#000000',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876',
  }

  
};
@Component({
  selector: 'app-theme',
  templateUrl: './theme.page.html',
  styleUrls: ['./theme.page.scss'],
})
export class ThemePage implements OnInit {

  thenmename : any = [{name:'Neon'},{name:'Autumn'} ,{name:'Night'},{name:'Dark'},{name:'Default'}];
  constructor(
    private popoverController: PopoverController,public theme: ThemeService ) {

  }

  ngOnInit() {
   
  }

  changetheme(name){
console.log(name,'name');
this.theme.setTheme(themes[name]);
this.popoverController.dismiss();


  }

}
