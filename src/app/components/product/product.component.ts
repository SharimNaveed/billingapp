import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
export interface DialogData {
  price: number;
  name: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

 /// products = [];
  constructor(public dialog: MatDialog, private router : Router) { }
 public products: Product[];
 price: string;
 name: string;

  ngOnInit() {
    this.getHeroes();
    console.log(this.products)
    // this.products = [{
    //   name : "chicken masala"
    // },
    // {
    //   name : "mutton masala"
    // },
    // {
    //   name : "beef masala"
    // }
    // ];
  } 

  public getHeroes() {
    Product.getAll()
        .then((heroes) => {
            this.products = heroes;
        });
}


public addHero(data : any){
    console.log('add hero called');
    new Product().insert(data)
    .then(data => {
        console.log(data);
    });
    this.router.navigate(['product']);
    console.log("not routed");

    this.getHeroes();

}

openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, price: this.price , updateFlag : false}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addHero(result);
    });
  }


}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'addProductDialog.html',
})
export class DialogOverviewExampleDialog {


  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}
