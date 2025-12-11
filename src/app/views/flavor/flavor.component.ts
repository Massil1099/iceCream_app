import { Component, Input } from '@angular/core';
import { IonRow , IonCol , IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonImg, IonButton } from "@ionic/angular/standalone";
import { Flavor } from 'src/app/data/flavor';

@Component({
  selector: 'app-flavor',
  templateUrl: './flavor.component.html',
  styleUrls: ['./flavor.component.scss'],
  standalone: true,
  imports: [IonButton, IonImg, IonGrid, IonContent, IonTitle, IonToolbar, IonHeader, IonCol, IonRow, IonLabel]
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

}
