import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IceCreamRepository } from 'src/app/repository/ice-cream-repository';
import { Flavor } from 'src/app/data/flavor';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonGrid, IonRow, IonCol, IonImg, IonLabel,
  IonInput, IonButton
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-empty-flavor',
  templateUrl: './empty-flavor.page.html',
  styleUrls: ['./empty-flavor.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonGrid, IonRow, IonCol, IonImg, IonLabel,
    IonInput, IonButton,
    CommonModule, FormsModule
  ]
})
export class EmptyFlavorPage {

  flavor!: Flavor;
  signature: string = '';


  
  constructor(
    private route: ActivatedRoute,
    private repo: IceCreamRepository,
    private router: Router
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    this.flavor = this.repo.flavors.find(f => f.name === name)!;
  }

  get orderMessage(): string {
    return `Hi,
Please order the following:
* ${this.flavor.name} icecream
${this.signature}`;
  }

  onOrder() {
    const body = encodeURIComponent(this.orderMessage);
    const url = `mailto:order@icecream.com?subject=Order&body=${body}`;
    window.open(url, '_self');
  }


  onCheckAllItems() {
    this.router.navigate(['/flavors']);
  }
}
