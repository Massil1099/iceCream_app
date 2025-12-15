import { Injectable } from '@angular/core';
import { Flavor } from '../data/flavor';
import { Extra } from '../data/extra';
import { Container } from '../data/container';
import { IceCreamRepository } from './ice-cream-repository';

@Injectable({
  providedIn: 'root',
})
export class IceCreamRepositoryDummyImpl extends IceCreamRepository {

   /** Parfums avec stock (volumes en ml) */
  public flavors: Flavor[] = [
    { name: "Chocolate",   stock: 300, img: "assets/img/chocolate.jpg", isEmpty: false, scoops: 0 },
    { name: "Vanilla", stock: 100, img: "assets/img/vanilla.jpg", isEmpty: false, scoops: 0},
    { name: "Pistachio", stock: 0, img: "assets/img/pistachio.jpg", isEmpty: true, scoops: 0}, // épuisé
  ];
  

  /** Ingrédients supplémentaires */
  public extras: Extra[] = [
    { name: "whiped cream", stock: 300, price: 0.95 },
    { name: "Hazelnuts", stock: 200, price: 1.30 }
  ];


  /** Contenants disponibles */
  public containers: Container[] = [
    { type: 'cup',  price: 0, stock: 2 },
    { type: 'cone', price: 1, stock: 7 }
  ];

}
