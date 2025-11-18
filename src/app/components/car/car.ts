import { Component, inject } from '@angular/core';
import { Cars} from '../../services/cars';

@Component({
  selector: 'app-car',
  imports: [],
  templateUrl: './car.html',
  styleUrl: './car.css',
})
export class Car {


  users: any[] = [];
  carService = inject(Cars)

  user1 = {name: "Prueba1", email: "prueba1@gmail.com", password: "12345"};

  constructor (){
    this.getAllUsers();
  }

  getAllUsers(){
    this.carService.getUsers().subscribe(resp => {
      this.users = resp;
    });
  }

  createUser( data: any){
      this.carService.createCar(data).subscribe(resp => {
        this.users.push(resp)
      })
  }

}
