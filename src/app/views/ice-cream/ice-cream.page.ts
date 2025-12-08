import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.page.html',
  styleUrls: ['./ice-cream.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IceCreamPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
