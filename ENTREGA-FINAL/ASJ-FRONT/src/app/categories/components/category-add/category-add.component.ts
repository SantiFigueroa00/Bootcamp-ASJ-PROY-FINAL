import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastServiceSuccess } from '../../../shared/components/toast/toast-success/toast-service';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CategoryBack } from '../../../models/CategoryBack';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  @ViewChild('successTpl') successTpl!: TemplateRef<any>;

  categories:CategoryBack[] = [];
  newCategory:CategoryBack={
    catName:''
  }
  idCatDelete: number | undefined;
  idCatEdit: number | undefined;
  flag: boolean=false;
  catEdit: CategoryBack={
    catName:''
  };

  
  
  ngOnInit(): void {
    this.lisCategories();
  }
  

  lisCategories(){
    this.categoryServ.getCategories().subscribe((res)=>{
      this.categories = res;
    });
  }

  onSubmit() {
    if (this.myFormReactivo.valid) {
      console.log('Formulario válido:', this.myFormReactivo.value);
      this.mapFormValuesToCategory();
      console.log(this.newCategory);

      if(this.flag){
        this.categoryServ.putCat(this.newCategory).subscribe((res)=>{
          console.log(res);
          this.ngOnInit();
        });
      }else{
        this.categoryServ.createProduct(this.newCategory).subscribe((res)=>{
          console.log(res);
          this.showSuccessToast(this.successTpl);
          this.ngOnInit();
        });
      }
      this.myFormReactivo.reset();
    }else{
      console.log('form invalido:', this.myFormReactivo.value);
    }
  }

  showSuccessToast(template : TemplateRef<any>) {
    this.toastServ.show({ template, classname: 'bg-success text-dark', delay: 1000 });
  }

  // REACTIVE FORM
  myFormReactivo: FormGroup;

  constructor(private fb: FormBuilder, public categoryServ: CategoryService, public toastServ:ToastServiceSuccess, private cd: ChangeDetectorRef) {
    this.myFormReactivo = this.fb.group({
      catName: ['', [Validators.required, Validators.minLength(4)]],
    });
  }




  mapFormValuesToCategory() {
    this.newCategory.catName = this.myFormReactivo.get('catName')?.value || '';
    this.newCategory.catIsDeleted=false;
  }
  

  checkDelete(id?: number) {
    this.idCatDelete=id;
  }

  checkActive(cat: CategoryBack) {
    this.catEdit=cat;
  }
  
  activeCat() {
    this.catEdit.catIsDeleted=false;
    this.categoryServ.putCat(this.catEdit).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    })
  }
  deleteCat(){
    this.categoryServ.deleteCat(this.idCatDelete).subscribe(res=>{
      console.log(res);
      this.ngOnInit();
    });
  }
  
  editCat(c: CategoryBack) {
    this.myFormReactivo.setValue({
      catName: c.catName
    });
    this.newCategory=c;
    this.flag=true;
  }
}
