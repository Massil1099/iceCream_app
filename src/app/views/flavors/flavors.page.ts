import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonGrid, IonRow, IonCheckbox, IonCol, IonRadio, IonRadioGroup, IonLabel, IonText, IonButton } from '@ionic/angular/standalone';

import { IceCreamRepository } from 'src/app/repository/ice-cream-repository';
import { Flavor } from 'src/app/data/flavor';
import { FlavorComponent } from '../flavor/flavor.component';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.page.html',
  styleUrls: ['./flavors.page.scss'],
  standalone: true,
  imports: [IonButton, IonText, IonLabel, IonRadio,  IonRadioGroup, IonCol, 
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonGrid, IonRow, IonCheckbox,
    CommonModule, FormsModule,
    FlavorComponent
  ]
})
export class FlavorsPage {

  onlyEmpty = false;

  selectedContainer: string | null = null;
  selectedExtras: Record<string, boolean> = {};
  scoops: Record<string, number> = {}; // ex: { "Vanilla": 2, "Chocolate": 1 }
  maxScoops = 5;

    
  constructor( private iceCreamRepository : IceCreamRepository) { 
    // initialise les extras à false
    this.iceCreamRepository.extras.forEach(extra => {
      this.selectedExtras[extra.name] = false;
    });

    // initialise les quantites selectionnes a 0
    this.iceCreamRepository.flavors.forEach(f => {
      this.scoops[f.name] = 0;
    });

  }
get flavors(): Flavor[] {
    if (this.onlyEmpty) {
      return this.iceCreamRepository.flavors.filter(f => f.isEmpty);
    }
    return this.iceCreamRepository.flavors;
  }

  get containers() {
    return this.iceCreamRepository.containers;
  }

  get extras() {
    return this.iceCreamRepository.extras;
  }


  get totalScoops(): number {
    return this.iceCreamRepository.flavors.reduce((sum, f) => sum + f.scoops, 0);
  }

  //si on arrive a 5 scoops (pour l'affichage de l'erreur)
  get isMaxReached(): boolean {
  return this.totalScoops >= this.maxScoops;
}

  //fonction pour calculer le prix des boules
  get scoopsPrice(): number {
    const n = this.totalScoops;

    switch (n) {
      case 1: return 1.50;
      case 2: return 3;
      case 3: return 4;
      case 4: return 5;
      case 5: return 5.50;
      default: return 0;
    }
  }

  //prix container
  get containerPrice(): number {
    if (!this.selectedContainer) return 0;

    const container = this.iceCreamRepository.containers.find(
      c => c.type === this.selectedContainer
    );

    return container ? container.price : 0;
  }

  //prix des extras
  get extrasPrice(): number {
    let total = 0;

    this.iceCreamRepository.extras.forEach(extra => {
      if (this.selectedExtras[extra.name]) {
        total += extra.price;
      }
    });

    return total;
  }

  //prix total de la glace
  get totalPrice(): number {
    return this.scoopsPrice + this.containerPrice + this.extrasPrice;
  }


}
