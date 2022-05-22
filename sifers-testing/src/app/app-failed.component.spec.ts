import { ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CatService } from './cat.service';
import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { Cat, CatColor, Sex } from './cat.model';
import { render, screen } from '@testing-library/angular'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let mockCatService: Spy<CatService> = createSpyFromClass(CatService, {
    observablePropsToSpyOn: ['cats$']
  });
  let renderOptions;
  let name = 'Misty';
  let cat: Cat = {name, age: 2, sex: Sex.FEMALE, color: CatColor.TORTI, altered: true};

  describe('has a cat', () => {
    beforeEach(async () => {
      let name = 'Frank';
      cat = {name, age: 2, sex: Sex.FEMALE, color: CatColor.TORTI, altered: true};
      mockCatService.cats$.nextWith([cat]);
  
      renderOptions = {
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
  
      const result = await render(AppComponent, renderOptions);
      fixture = result.fixture;
    });
  
    it('should render title', () => {
      const titleElement = screen.getByTestId('AppComponent_Title');
        
      expect(titleElement.innerHTML).toContain('Cats Looking For a Home');
    });
  
    it('should render cats', () => {
      const namedCat = screen.getByTestId(`AppComponent_CatListItem_${name}`);
        
      expect(namedCat).toBeTruthy();
    });
  });

  describe('no cats test block', () => {
    beforeEach(async () => {
      mockCatService.cats$.nextWith([]);
  
      renderOptions = {
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
  
      const result = await render(AppComponent, renderOptions);
      fixture = result.fixture;
    });
  
    it('should render no cats message for no cats', () => {
      mockCatService.cats$.nextWith([]);
      const noCats = screen.getByTestId(`AppComponent_NoCats`);
        
      expect(noCats).toBeTruthy();
    });
  });
});
