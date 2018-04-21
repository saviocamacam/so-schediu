import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  form: FormGroup;
  loading = false;
  array;
  proccesses: Array<Proccess>;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      type: ['', Validators.required],
      file: null
    });
  }

  clearFile() {

  }

  onSubmit() {
    const formModel = this.form.value;

    const raw = window.atob(formModel.file.value);
    const raw_proccesses = raw.split('\n');
    const proccesses = new Array<Proccess>();
    raw_proccesses.forEach(element => {
      const fieldProccess = element.split(' ');
      const proccess = new Proccess();
      proccess.pid = Number(fieldProccess[0]);
      proccess.duration = Number(fieldProccess[1]);
      proccess.priority = Number(fieldProccess[2]);
      proccess.timeComing = Number(fieldProccess[3]);
      if (fieldProccess.length > 4) {
        proccess.events = fieldProccess.slice(4);
      }
      proccesses.push(proccess);
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('file').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      };
    }
  }

}
