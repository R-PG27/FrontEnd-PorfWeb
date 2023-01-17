import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  imgEdu: string = '';
  nombreEdu: string = '';
  descripcionEdu: string = '';
  yearsEdu: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const edu = new Educacion(this.imgEdu, this.nombreEdu, this.descripcionEdu, this.yearsEdu);
    this.sEducacion.save(edu).subscribe(data =>{
      alert("Educación añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}
