import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CatService } from './cat.service';
import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { Cat } from './cat.model';
import { render, screen } from '@testing-library/angular'
import { createCat } from './cats.mock';

describe('AppComponent', () => {
  // no shared variables = no leaky tests
  // no beforeEach = every test can easily have unique setup
  const setup = async(cats: Cat[] = [createCat()]) => {
    const mockCatService: Spy<CatService> = createSpyFromClass(CatService, {
      observablePropsToSpyOn: ['cats$']
    });
    mockCatService.cats$.nextWith(cats);

    const renderOptions = {
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: CatService,
          useValue: mockCatService
        }
      ],
      declarations: [
        AppComponent
      ],
    };

    const { fixture } = await render(AppComponent, renderOptions);

    return {
      fixture,
      mockCatService,
    }
  }

  it('should render title', async() => {
    await setup();

    const titleElement = screen.getByTestId('AppComponent_Title');
      
    expect(titleElement.innerHTML).toContain('Cats Looking For a Home');
  });

  it('should render cats', async() => {
    const name = 'Misty';
    const cat = createCat({ name });
    await setup([cat]);

    const namedCat = screen.getByTestId(`AppComponent_CatListItem_${name}`);
      
    expect(namedCat).toBeTruthy();
  });

  it('should render no cats message for no cats', async() => {
    await setup([]);

    const noCats = screen.getByTestId(`AppComponent_NoCats`);
      
    expect(noCats).toBeTruthy();
  });
});
