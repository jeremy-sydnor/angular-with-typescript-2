import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Product, ProductService} from "../shared/product.service";
import {of} from "rxjs";

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let mockProductService: jasmine.SpyObj<ProductService>;
  const product: Product = {
    id: 1,
    title: 'Test Title',
    price: 1.99,
    rating: 1,
    description: 'Test Description',
    categories: []
  }

  beforeEach(async () => {
    mockProductService = jasmine.createSpyObj<ProductService>(['getProductById']);
    mockProductService.getProductById.and.returnValue(product);
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: ProductService, useValue: mockProductService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
