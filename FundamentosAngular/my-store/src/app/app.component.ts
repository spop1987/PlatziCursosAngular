import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  widthImg = 10;
  name = 'Sergio';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;

  register = {
    name: '',
    email: '',
    password: ''
  }


  person = {
    name: "Sergio Pastor",
    age: 34,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  names: string[] = ['Sergio', 'Diovana'];
  newName = '';
  box = {
    width: 10,
    height: 100,
    background: 'red'
  };

  products: Product[] = [
    {
      name: 'Coleccion de albumnes',
      price: 356,
      image: './assets/images/album.jpg',
      category: 'all'
    },
    {
      name: 'Mi bicicleta',
      price: 686,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Mis libros',
      price: 734,
      image: './assets/images/books.jpg'
    }
  ]

  toggleButton(){
      this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onChangeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }
}
