import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonGrid, IonRow, IonCol, IonLabel, IonButton,
  IonCheckbox
} from '@ionic/angular/standalone';
import { Container } from 'src/app/data/container';

import { IceCreamRepository } from 'src/app/repository/ice-cream-repository';
import { Flavor } from 'src/app/data/flavor';
import { Extra } from 'src/app/data/extra';
@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.page.html',
  styleUrls: ['./all-items.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonGrid, IonRow, IonCol, IonLabel, IonCheckbox,
    IonButton, CommonModule, FormsModule
  ]
})

export class AllItemsPage {

  selectedName!: string;
  flavors: Flavor[] = [];
  extras: Extra[] = [];
  containers: Container[] = [];


  // items sélectionnés
  selected: Record<string, boolean> = {};

  // collapse mode
  collapsed: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private iceCreamRepository: IceCreamRepository,
    private router: Router
  ) {
    this.selectedName = this.route.snapshot.paramMap.get('name')!;

    this.flavors = this.iceCreamRepository.flavors;
    this.extras = this.iceCreamRepository.extras;
    this.containers = this.iceCreamRepository.containers;

    // Initialiser les checkbox
    [...this.flavors, ...this.extras].forEach(item => {
      this.selected[item.name] = false;
    });

    // Coche automatiquement le parfum vide + désactivé dans le template
    this.selected[this.selectedName] = true;
  }

  get orderMessage(): string {
    const list = Object.entries(this.selected)
      .filter(([_, val]) => val)
      .map(([name]) => `* ${name}`)
      .join('\n');

    return `Hi,
  Please order the following:
  ${list}
  Thanks,`;
  }

  onOrder() {
    const body = encodeURIComponent(this.orderMessage);
    const url = `mailto:order@icecream.com?subject=Order&body=${body}`;
    window.open(url, '_self');
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  goBack() {
    this.router.navigate(['/flavors']);
  }


  getUnit(item: any): string {
  // Flavours en ml
  if ('scoops' in item) return 'ml';

  // Extras
  if (item.name.toLowerCase().includes('cream')) return 'ml';
  if (item.name.toLowerCase().includes('hazelnut')) return 'g';

  // Containers en unites
  if ('type' in item) return 'units';

  return '';
}

}