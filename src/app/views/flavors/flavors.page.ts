import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonGrid, IonRow, IonCheckbox, IonCol, IonRadio, IonLabel } from '@ionic/angular/standalone';

import { IceCreamRepository } from 'src/app/repository/ice-cream-repository';
import { Flavor } from 'src/app/data/flavor';
import { FlavorComponent } from '../flavor/flavor.component';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.page.html',
  styleUrls: ['./flavors.page.scss'],
  standalone: true,
  imports: [IonLabel, IonRadio, IonCol, 
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonGrid, IonRow, IonCheckbox,
    CommonModule, FormsModule,
    FlavorComponent
  ]
})
export class FlavorsPage {

    selectedContainer: string | null = null;
    selectedExtras: Record<string, boolean> = {};

    
  constructor( private iceCreamRepository : IceCreamRepository) { 
    // initialise les extras à false
    this.iceCreamRepository.extras.forEach(extra => {
      this.selectedExtras[extra.name] = false;
    });
  }
    get flavors(): Flavor[] {
      return this.iceCreamRepository.flavors
    }

     get containers() {
    return this.iceCreamRepository.containers;
  }

  get extras() {
    return this.iceCreamRepository.extras;
  }


}
