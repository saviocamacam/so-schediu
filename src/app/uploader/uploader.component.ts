import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProccessNameSpace } from '../model/proccess';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  form: FormGroup;
  loading = false;
  array;
  proccesses: Array<ProccessNameSpace.Proccess>;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      type: ['', Validators.required],
      file: null
    });
  }

  clearFile() {}

  onSubmit() {
    const formModel = this.form.value;

    const raw = window.atob(formModel.file.value);
    const raw_proccesses = raw.split('\n');
    this.proccesses = new Array<any>();
    let i = 0;
    const colors = [
      '#D50000',
      '#AA00FF',
      '#C0CA33',
      '#0091EA',
      '#FF9800',
      '#BF360C'
    ];

    raw_proccesses.forEach(element => {
      const fieldProccess = element.split(' ');
      const proccess = new ProccessNameSpace.Proccess();
      proccess.pid = Number(fieldProccess[0]);
      proccess.duration = Number(fieldProccess[1]);
      proccess.priority = Number(fieldProccess[2]);
      proccess.timeComing = Number(fieldProccess[3]);
      proccess.color = colors[i % colors.length];


      if (fieldProccess.length > 4) {
        proccess.events = fieldProccess.slice(4);
        proccess.scheduleArray = new Array<number>();
        let indexEvents = 0;
        for (
          let j = 0;
          j < proccess.duration;
          j++
        ) {
          // tslint:disable-next-line:triple-equals
          if (j == proccess.events[indexEvents]) {
            proccess.scheduleArray.push(1);
            indexEvents++;
          } else {
            proccess.scheduleArray.push(0);
          }
        }
      }
      this.proccesses.push(proccess);
      i++;
    });
    // console.log(this.proccesses);
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
