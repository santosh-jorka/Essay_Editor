import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextReplacement } from '../../models/text-replacement.model';

@Component({
  selector: 'app-flag-suggest-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flag-suggest-panel.component.html'
})
export class FlagSuggestPanelComponent {
  flaggedSentence: string = '';
  suggestedImprovement: string = '';

  @Output() applyChange = new EventEmitter<TextReplacement>();
  @Output() textToHighlight = new EventEmitter<string>();

  get isValid(): boolean {
    return this.flaggedSentence.trim().length > 0 && 
           this.suggestedImprovement.trim().length > 0;
  }

  onFlaggedSentenceChange(text: string) {
    this.textToHighlight.emit(text);
  }

  onApplyChange() {
    if (this.isValid) {
      this.applyChange.emit({
        originalText: this.flaggedSentence.trim(),
        replacementText: this.suggestedImprovement.trim()
      });
      this.resetForm();
    }
  }

  private resetForm() {
    this.flaggedSentence = '';
    this.suggestedImprovement = '';
    this.textToHighlight.emit('');
  }
} 