import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirectiveDomOperationComponent } from './structure-directive-dom-operation.component';

describe('StructureDirectiveDomOperationComponent', () => {
  let component: StructureDirectiveDomOperationComponent;
  let fixture: ComponentFixture<StructureDirectiveDomOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureDirectiveDomOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureDirectiveDomOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
