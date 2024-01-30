import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProvidersService } from '../../../providers/services/providers.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/Product';
import { ProductBack } from '../../../models/ProductBack';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent {
  productId: string|null='';
  product:ProductBack={
    prodId:0,
    prodCod:'',
    prodName:'',
    prodPrice:0,
    prodDescription:'', 
    provider:{
      provId:0,
      provCod:'',
      provCompName:'',
      provWebSite:'',
      provEmail:'',
      provPhone:'',
      item:{
          itemId:0,
          itemName:''
      },
      address:{
          adId:0,
          adStreet:'',
          adNumber:0,
          adZip:'',
          locality:{
              locId:0,
              locName:'',
              province:{
                  proId:0,
                  proName:'',
                  country:{
                      conId:0,
                      conName:''
                  }
              }
          }
      },
      provCuit:'',
      ivaCondition:{
          ivaId:0,
          ivaCond:'',
      },
      provLogo:'',
      infoContact:{
          contId:0,
          contName:'',
          contPhone:'',
          contEmail:'',
          contRole:''
      },
      provIsDeleted:false
    },
    category:{
        catId:0,
        catName:'',
    },
    images:[{}]
  }
  products:ProductBack[] = [];

  constructor(public productServ: ProductsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.productServ.getProductById(this.productId).subscribe((res)=>{
        this.product=res;
        this.productServ.getProductsByIdProvider(this.product.provider.provId).subscribe((res:any[])=>{
          this.products=res.filter(product => product.id !== this.productId);
        })
      })
    });
  }
}
