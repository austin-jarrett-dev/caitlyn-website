import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourGrowersComponent } from './your-growers.component';

describe('YourGrowersComponent', () => {
  let component: YourGrowersComponent;
  let fixture: ComponentFixture<YourGrowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourGrowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourGrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
