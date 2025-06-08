import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EssayEditorComponent } from './components/essay-editor/essay-editor.component';
import { FlagSuggestPanelComponent } from './components/flag-suggest-panel/flag-suggest-panel.component';
import { TextReplacementService } from './services/text-replacement.service';
import { TextReplacement } from './models/text-replacement.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    EssayEditorComponent,
    FlagSuggestPanelComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  essayText: string = '';
  currentHighlightText: string = '';

  constructor(private textReplacementService: TextReplacementService) {}

  onTextToHighlight(text: string) {
    this.currentHighlightText = text;
  }

  onApplyChange(replacement: TextReplacement) {
    const result = this.textReplacementService.replaceText(this.essayText, replacement);
    if (result !== null && result !== undefined) {
      this.essayText = result;
    }
    this.currentHighlightText = ''; // Clear highlighting after replacement
  }
}
