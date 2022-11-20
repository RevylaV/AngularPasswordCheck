import { Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements OnInit, DoCheck {

  password: any
  haveEnoughCharacters: boolean = true
  validationPassed: boolean[] = []
  strength: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  containsNumbers(password: string) {
    return /[0-9]/.test(password);
  }

  containsLetters(password: string) {
    return /[a-z]/i.test(password);
  }

  containsSpecialChars(str: string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  ngDoCheck(){
    if (this.password) {
      this.validationPassed = [
        this.containsNumbers(this.password),
        this.containsLetters(this.password),
        this.containsSpecialChars(this.password)
      ]
      this.strength = this.validationPassed.filter(value => value === true).length;
      this.haveEnoughCharacters = this.password.length > 7 ? true : false
    } else {
      this.validationPassed = []
      this.strength = 0
      this.haveEnoughCharacters = true
    }
  }

}
