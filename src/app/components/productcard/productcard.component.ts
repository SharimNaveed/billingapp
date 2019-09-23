import { Component, OnInit, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { DialogOverviewExampleDialog } from  '../product/product.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html'
})
export class ProductcardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() product: any;
  @Input() index : any;
  @Input() prouductComponent: ProductComponent;

  ngOnInit() {
  }


  public updateProduct(){
    console.log('add hero called');
    this.product.update();
    console.log(this.product.id +'.......' + this.product.name + '......' +this.product.price);

    this.prouductComponent.getHeroes();

}

  public deleteProduct() {
    this.product.delete();

    this.prouductComponent.getHeroes();
}

openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '250px',
    data: {name: this.product.name, price: this.product.price , updateFlag : true}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    this.product.name = result.name;
    this.product.price = result.price;
    this.updateProduct();
  });
}

}
