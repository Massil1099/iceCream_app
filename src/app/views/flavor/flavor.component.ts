import { Component, Input } from '@angular/core';
import { IonRow , IonCol , IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonImg } from "@ionic/angular/standalone";
import { Flavor } from 'src/app/data/flavor';

@Component({
  selector: 'app-flavor',
  templateUrl: './flavor.component.html',
  styleUrls: ['./flavor.component.scss'],
  standalone: true,
  imports: [IonImg, IonGrid, IonContent, IonTitle, IonToolbar, IonHeader, IonCol, IonRow, IonLabel]
})
export class FlavorComponent {

  @Input() flavor!: Flavor;

}
