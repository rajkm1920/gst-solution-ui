import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletDefaultComponent } from './wallet-default.component';

describe('WalletDefaultComponent', () => {
  let component: WalletDefaultComponent;
  let fixture: ComponentFixture<WalletDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
