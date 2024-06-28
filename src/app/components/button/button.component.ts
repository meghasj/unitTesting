import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonLabel: string = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() value: number = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  
  onClick() {
    this.buttonClick.emit();
  }

  increment() {
    this.value++;
    this.valueChange.emit(this.value);
  }
}
