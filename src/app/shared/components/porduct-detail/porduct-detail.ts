import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '../../../pipe';


@Component({
  selector: 'app-porduct-detail',
  imports: [CurrencyPipe],
  templateUrl: './porduct-detail.html',
  styleUrl: './porduct-detail.scss',
})
export class PorductDetail {
  private route = inject(ActivatedRoute);

  detail = {
    "name": "Retro Trainingsjacke",
    "description": "Sportliche Jacke im Stil der frühen 2000er. Kultiges Design mit Kontraststreifen. Das Material ist formstabil und die Farben sind noch sehr kräftig.",
    "specs": "Größe: M, Material: Polyester-Mix, Farbe: Grün/Weiß",
    "stock": 2,
    "price": 39.00
  }

    ngOnInit(){
    let currentName = this.route.snapshot.paramMap.get('name');
    if(currentName)  this.detail.name = currentName;
  }


 deleteDetail(){
 this.detail.name="";
 }
}
