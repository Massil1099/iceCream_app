import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonRow , IonCol , IonLabel, IonImg, IonButton, IonIcon  } from "@ionic/angular/standalone";
import { Flavor } from 'src/app/data/flavor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flavor',
  templateUrl: './flavor.component.html',
  styleUrls: ['./flavor.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonImg, IonCol, IonRow, IonLabel, IonIcon, RouterLink]
})
export class FlavorComponent {

  @Input() flavor!: Flavor;

  // total de toutes les boules (venant de la page)
  @Input() totalScoops: number = 0;

  // limite max (toujours 5)
  @Input() maxScoops: number = 5;


  // bouton - désactivé ?
  canNotBeDecreased() {
    return this.flavor.scoops <= 0;
  }

  // bouton + désactivé ?
  canNotBeIncreased() {
    return this.totalScoops >= this.maxScoops || this.flavor.isEmpty;
  }

  // clic bouton -
  onSub() {
    if (!this.canNotBeDecreased()) this.flavor.scoops--;
  }

  // clic bouton +
  onAdd() {
    if (!this.canNotBeIncreased()) this.flavor.scoops++;
  }

  isOutOfStock(): boolean{
    return this.flavor.stock <= 0;
  }

}
