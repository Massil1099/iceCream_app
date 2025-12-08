import { Flavor } from '../data/flavor';
import { Extra } from '../data/extra';
import { Container } from '../data/container';

export abstract class IceCreamRepository {
    public abstract flavors: Flavor[]; 

    public abstract extras: Extra[]; 


    public abstract containers: Container[]; 

}
