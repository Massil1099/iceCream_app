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
    { name: "Chocolate",   stock: 500 },
    { name: "Vanilla", stock: 500},
    { name: "Pistachio", stock: 0}, // exemple épuisé
  ];
  

  /** Ingrédients supplémentaires */
  public extras: Extra[] = [
    { name: "whiped cream", stock: 300, price: 0.95 },
    { name: "Hazelnuts", stock: 200, price: 0.95 }
  ];


  /** Contenants disponibles */
  public containers: Container[] = [
    { type: 'cup',  price: 0 },
    { type: 'cone', price: 1 }
  ];

}
