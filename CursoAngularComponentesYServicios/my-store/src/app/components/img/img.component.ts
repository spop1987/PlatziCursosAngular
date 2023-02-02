import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';
  @Input('img')
    set changeImg(newImg: string){
      this.img = newImg;
      console.log('change just img => ', this.img);
    }

  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  counter = 0;
  counterFn: number | undefined;

  /**
   * el constructor corre antes del render(metodo que renderiza la pagina)
   * es importante no correr metodos async.
   * el constructor solo corre una vez.
   */
  constructor() {
    console.log('constructor',  'imgValue =>', this.img);
  }

  /**
   * Corre antes y durante del rander y su objetivo es estar actualizando los cambios en los inputs (evalua cambios en los inputs)
   * corre varias veces, a cada vez que hay un cmabio.
   */
  ngOnChanges() {
    console.log('ngOnChanges',  'imgValue =>', this.img);
  }

  /**
   * Corre antes del render
   * Aqui si pueden ser implementados metodos asyn (fetch para llamar una api por ejemplo)
   * Corre una sola vez
   */
  ngOnInit(): void {
    console.log('ngOnInit',  'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter =>', this.counter);
    // }, 1000)
  }

  /**
   * Corre despues del render
   * Aqui se maneja los hijos del componente.
   */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit',  'imgValue =>', this.img);
  }

  /**
   * Corre cuando se vaya a eliminar el componente.
   */
  ngOnDestroy(): void {
    console.log('ngOnDestroy',  'imgValue =>', this.img);
    window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
