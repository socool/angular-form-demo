import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuComponent } from './demo-form-sku.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DemoFormSkuComponent', () => {
  let component: DemoFormSkuComponent;
  let fixture: ComponentFixture<DemoFormSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
