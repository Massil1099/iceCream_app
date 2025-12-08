import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonGrid, IonRow, IonCheckbox
} from '@ionic/angular/standalone';

import { IceCreamRepository } from 'src/app/repository/ice-cream-repository';
import { Flavor } from 'src/app/data/flavor';
import { FlavorComponent } from '../flavor/flavor.component';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.page.html',
  styleUrls: ['./flavors.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonGrid, IonRow, IonCheckbox,
    CommonModule, FormsModule,
    FlavorComponent
  ]
})
export class FlavorsPage {

  constructor( private iceCreamRepository : IceCreamRepository) { }
    get flavors(): Flavor[] {
      return this.iceCreamRepository.flavors
    }

}
