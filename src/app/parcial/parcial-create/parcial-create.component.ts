import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ParcialService} from '../parcial.service';
import {Parcial} from '../parcial';
import {DatePipe} from '@angular/common';
//import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-parcial-create',
  templateUrl: './parcial-create.component.html',
  styleUrls: ['./parcial-create.component.css'],
  providers: [DatePipe]
})
export class ParcialCreateComponent implements OnInit {

  constructor(
    //private toastrService: ToastrService,
    private parcialService: ParcialService,
    private dp:DatePipe

    ) { }
  parcial: Parcial;

  @Output() cancel= new EventEmitter();

    @Output() create= new EventEmitter();

  createParcial(): Parcial
  {
    let dateB: Date = new Date(this.parcial.date.year, this.parcial.date.month - 1, this.parcial.date.day);
        this.parcial.date = this.dp.transform(dateB, 'yyyy-MM-dd');
    console.log(this.parcial);

    this.parcialService.createParcial(this.parcial).subscribe((parcial)=>{this.parcial=parcial; this.create.emit();
     // this.toastrService.success("The author was created", "Author creation");
    });
    return this.parcial;
  }
  cancelCreation(): void {
    this.cancel.emit();
}
  ngOnInit() {
    this.parcial= new Parcial();
  }

}