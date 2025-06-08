import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle text highlighting updates', () => {
    const text = 'test text';
    component.onTextToHighlight(text);
    expect(component.currentHighlightText).toBe(text);
  });

  it('should handle text replacement', () => {
    const originalText = 'The quick brown fox';
    const replacement = {
      originalText: 'quick brown',
      replacementText: 'fast red'
    };

    component.essayText = originalText;
    component.onApplyChange(replacement);
    
    expect(component.essayText).toBe('The fast red fox');
    expect(component.currentHighlightText).toBe('');
  });
});
