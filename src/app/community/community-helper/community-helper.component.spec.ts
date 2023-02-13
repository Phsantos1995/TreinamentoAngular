import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityHelperComponent } from './community-helper.component';

describe('CommunityHelperComponent', () => {
  let component: CommunityHelperComponent;
  let fixture: ComponentFixture<CommunityHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
