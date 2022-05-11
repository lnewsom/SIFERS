import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
  })

  it(`should have as title 'sifers-testing'`, () => {
    expect(app.title).toEqual('sifers-testing');
  });

  it('should render title', () => {
    expect(compiled.querySelector('.content span')?.textContent).toContain('sifers-testing app is running!');
  });
});
