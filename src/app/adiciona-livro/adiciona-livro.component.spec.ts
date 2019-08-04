import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaLivroComponent } from './adiciona-livro.component';

describe('AdicionaLivroComponent', () => {
  let component: AdicionaLivroComponent;
  let fixture: ComponentFixture<AdicionaLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
