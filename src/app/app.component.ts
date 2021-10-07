import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length=0
  password=''
  includeLetters=false
  includeNumbers=false
  includeSymbols=false

  onChangeLength(event:any){
    const parsedVal = parseInt(event.target.value)
    if(!isNaN(parsedVal)){
      this.length=parsedVal
    }
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers
  }
  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols
  }
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters
  }
  onButtonClick(){
  // prgrm to randomly generate password

  const number = '1234567890'
  const letters='abcdefghijklmnopqrstuvwxyz'
  const symbols = '!@#$%^&*()'

  let validChars = ''
  if(this.includeNumbers){
    validChars+=number
  }
  if(this.includeLetters){
    validChars+=letters
  }
  if(this.includeSymbols){
    validChars+=symbols
  }

  let generatedPassword = ''
  for(let i=0;i<this.length; i++){

    // generate a random nmbr
    const index = Math.floor(Math.random()* validChars.length)
    generatedPassword+=validChars[index]

  }

  this.password=generatedPassword
  console.log(this.password);
}



}

