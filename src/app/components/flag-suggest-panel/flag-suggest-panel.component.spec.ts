import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlagSuggestPanelComponent } from './flag-suggest-panel.component';
import { By } from '@angular/platform-browser';

describe('FlagSuggestPanelComponent', () => {
  let component: FlagSuggestPanelComponent;
  let fixture: ComponentFixture<FlagSuggestPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagSuggestPanelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FlagSuggestPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit text to highlight when flagged sentence changes', () => {
    const testText = 'Test sentence';
    spyOn(component.textToHighlight, 'emit');
    
    component.flaggedSentence = testText;
    component.onFlaggedSentenceChange(testText);
    
    expect(component.textToHighlight.emit).toHaveBeenCalledWith(testText);
  });

  it('should validate form when both fields are filled', () => {
    component.flaggedSentence = 'Original text';
    component.suggestedImprovement = 'Improved text';
    
    expect(component.isValid).toBe(true);
  });

  it('should invalidate form when flagged sentence is empty', () => {
    component.flaggedSentence = '';
    component.suggestedImprovement = 'Improved text';
    
    expect(component.isValid).toBe(false);
  });

  it('should invalidate form when suggested improvement is empty', () => {
    component.flaggedSentence = 'Original text';
    component.suggestedImprovement = '';
    
    expect(component.isValid).toBe(false);
  });

  it('should emit replacement when apply button is clicked', () => {
    const originalText = 'Original text';
    const improvedText = 'Improved text';
    spyOn(component.applyChange, 'emit');
    
    component.flaggedSentence = originalText;
    component.suggestedImprovement = improvedText;
    fixture.detectChanges();
    
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    
    expect(component.applyChange.emit).toHaveBeenCalledWith({
      originalText: originalText,
      replacementText: improvedText
    });
  });

  it('should reset form after applying changes', () => {
    component.flaggedSentence = 'Original text';
    component.suggestedImprovement = 'Improved text';
    spyOn(component.textToHighlight, 'emit');
    
    component.onApplyChange();
    
    expect(component.flaggedSentence).toBe('');
    expect(component.suggestedImprovement).toBe('');
    expect(component.textToHighlight.emit).toHaveBeenCalledWith('');
  });

  it('should disable apply button when form is invalid', () => {
    component.flaggedSentence = '';
    component.suggestedImprovement = '';
    fixture.detectChanges();
    
    const button = fixture.debugElement.query(By.css('button'));
    
    expect(button.nativeElement.disabled).toBe(true);
  });

  it('should enable apply button when form is valid', () => {
    component.flaggedSentence = 'Original text';
    component.suggestedImprovement = 'Improved text';
    fixture.detectChanges();
    
    const button = fixture.debugElement.query(By.css('button'));
    
    expect(button.nativeElement.disabled).toBe(false);
  });
}); 