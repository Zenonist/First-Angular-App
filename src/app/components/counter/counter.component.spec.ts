import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

/**
 * Test suite for the CounterComponent.
 */
describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  /**
   * Asynchronous setup function that runs before each test.
   * Configures the testing module and creates component instance.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
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
