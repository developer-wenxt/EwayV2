import { Component, OnInit, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  template: `
    <textarea pInputTextarea
              [id]="id"
              [formControl]="formControl"
              cols="60"
              rows="2"
              [placeholder]="to.placeholder"
              [formlyAttributes]="field"
    >
    </textarea>
  `
})

export class TextareaTypeComponent extends FieldType implements OnInit {
  ngOnInit() {
  }
}