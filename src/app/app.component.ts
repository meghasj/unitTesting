import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { FormsComponent } from "./component/forms/forms.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ButtonComponent, FormsComponent]
})
export class AppComponent {
  title = 'unittest';
  message: string = 'The button has not been clicked yet.';
  handleButtonClick() {
    this.message = 'Button has been clicked!';
  }
  counterValue: number = 0;
  handleValueChange(newValue: number) {
    this.counterValue = newValue;
  }
}
