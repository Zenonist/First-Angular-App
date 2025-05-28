import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';

/**
 * Test suite for the GreetingComponent.
 */
describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  /**
   * Asynchronous setup function that runs before each test.
   * Configures the testing module and creates component instance.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test case to verify that the component is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
