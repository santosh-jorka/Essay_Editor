import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EssayEditorComponent } from './essay-editor.component';
import { By } from '@angular/platform-browser';

describe('EssayEditorComponent', () => {
  let component: EssayEditorComponent;
  let fixture: ComponentFixture<EssayEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssayEditorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EssayEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit content changes', () => {
    const testText = 'Test content';
    const emitSpy = spyOn(component.essayContentChange, 'emit');
    
    const editorElement = fixture.debugElement.query(By.css('[contenteditable]')).nativeElement;
    editorElement.innerText = testText;
    
    // Trigger input event
    editorElement.dispatchEvent(new Event('input'));
    
    expect(emitSpy).toHaveBeenCalledWith(testText);
  });

  it('should highlight text when textToHighlight is set', () => {
    const essayText = 'The quick brown fox jumps over the lazy dog';
    const highlightText = 'quick brown';
    
    component.essayContent = essayText;
    component.textToHighlight = highlightText;
    fixture.detectChanges();
    
    const editorElement = fixture.debugElement.query(By.css('[contenteditable]')).nativeElement;
    const highlightSpan = editorElement.querySelector('.highlight');
    
    expect(highlightSpan).toBeTruthy();
    expect(highlightSpan.textContent).toBe(highlightText);
  });

  it('should not highlight when textToHighlight is empty', () => {
    const essayText = 'The quick brown fox';
    
    component.essayContent = essayText;
    component.textToHighlight = '';
    fixture.detectChanges();
    
    const editorElement = fixture.debugElement.query(By.css('[contenteditable]')).nativeElement;
    const highlightSpan = editorElement.querySelector('.highlight');
    
    expect(highlightSpan).toBeFalsy();
    expect(editorElement.innerText).toBe(essayText);
  });

  it('should highlight multiple occurrences of text', () => {
    const essayText = 'The fox jumps over the fox while the fox watches';
    const highlightText = 'fox';
    
    component.essayContent = essayText;
    component.textToHighlight = highlightText;
    fixture.detectChanges();
    
    const editorElement = fixture.debugElement.query(By.css('[contenteditable]')).nativeElement;
    const highlightSpans = editorElement.querySelectorAll('.highlight');
    
    expect(highlightSpans.length).toBe(3);
    highlightSpans.forEach((span: Element) => {
      expect(span.textContent).toBe(highlightText);
    });
  });

  it('should handle special characters in highlight text', () => {
    const essayText = 'Testing (special) characters in [text]';
    const highlightText = '(special)';
    
    component.essayContent = essayText;
    component.textToHighlight = highlightText;
    fixture.detectChanges();
    
    const editorElement = fixture.debugElement.query(By.css('[contenteditable]')).nativeElement;
    const highlightSpan = editorElement.querySelector('.highlight');
    
    expect(highlightSpan).toBeTruthy();
    expect(highlightSpan.textContent).toBe(highlightText);
  });
}); 