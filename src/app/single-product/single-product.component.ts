import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor(private tutorialService: ProductserviceService) { }

  ngOnInit(): void {
  }
  retrieveTutorials(): void {

    this.tutorialService.get(1)
    .subscribe(
      response => {
        const { tutorials, totalItems } = response;

        console.log(response);
      },
      error => {
        console.log(error);
      });
  }


}
