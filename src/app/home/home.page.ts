import { Component } from '@angular/core';
import { isNumber } from 'util';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	//Code for Calculator portion of app

	value = '0';							//declaring variables	
	oldValue = '0';
	operator = '';
	
	readyForNewImput = true;	
	
  onButtonPress(imput) {						//assigns button press to imput
	console.log(imput);
	
	if (isNumber(imput)){						//checks to see if button is a number
		console.log('is a number')
		
		if (this.readyForNewImput)				//allows you to enter multi-digit numbers
			this.value = '' + imput;
		else
			this.value += '' + imput;
			this.readyForNewImput = false;
	}
	
	else if (imput === 'C') {					//resets value back to 0 if C is selected
		this.value = '0'
		this.readyForNewImput = true;
	}
	
	else if (imput === '=') {					//functions for operators
	
		if (this.operator === '/')
			this.value = '' + (parseInt(this.oldValue) / parseInt(this.value));
		else if (this.operator === 'x')
			this.value = '' + (parseInt(this.oldValue) * parseInt(this.value));		
		else if (this.operator === '-')
			this.value = '' + (parseInt(this.oldValue) - parseInt(this.value));			
		else if (this.operator === '+')
			this.value = '' + (parseInt(this.oldValue) + parseInt(this.value));
			
		this.readyForNewImput = true;
	}
	
	else {										//assign current operator to imput
		this.readyForNewImput = true;
		this.oldValue = this.value;
		this.operator = imput;
		
	}
  }
}

