import { ChangeDetectorRef, Component, OnDestroy, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastServiceSuccess } from '../../../shared/components/toast/toast-success/toast-service';
import { CategoryService } from '../../services/category.service';
import { CategoryBack } from '../../../models/CategoryBack';
import { AppToastService } from '../../../shared/components/toast/toast-info/toast-info-service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit, OnDestroy{

  @ViewChild('successTpl') successTpl!: TemplateRef<any>;
  @ViewChild('invalidTpl') invalidTpl!: TemplateRef<any>;
  toastService = inject(AppToastService);
  
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
  
  ngOnDestroy(): void {
    this.toastServ.clear();
    this.toastService.clear();
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
      this.showToastInfo(this.invalidTpl)
      console.log('form invalido:', this.myFormReactivo.value);
    }
  }

  showSuccessToast(template : TemplateRef<any>) {
    this.toastServ.show({ template, classname: 'bg-success text-dark', delay: 1000 });
  }

  showToastInfo(template: TemplateRef<any>) {
    this.toastService.show({ template, classname: 'bg-warning text-white', delay: 5000 });
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
