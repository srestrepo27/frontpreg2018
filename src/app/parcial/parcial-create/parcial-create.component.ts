import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ParcialService} from '../parcial.service';
import {Parcial} from '../parcial';
@Component({
  selector: 'app-parcial-create',
  templateUrl: './parcial-create.component.html',
  styleUrls: ['./parcial-create.component.css']
})
export class ParcialCreateComponent implements OnInit {

  constructor(private parcialService: ParcialService) { }
  parcial: Parcial;

  @Output() cancel= new EventEmitter();

    @Output() create= new EventEmitter();

  createParcial(): Parcial
  {
    console.log(this.parcial);

    this.parcialService.createParcial(this.parcial).subscribe((parcial)=>{this.parcial=parcial; this.create.emit();
    
    });
    return this.parcial;
  }
  ngOnInit() {
    this.parcial= new Parcial();
  }

}