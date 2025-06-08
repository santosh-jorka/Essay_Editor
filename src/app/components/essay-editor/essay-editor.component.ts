import { Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-essay-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './essay-editor.component.html',
  styleUrls: ['./essay-editor.component.css']
})
export class EssayEditorComponent implements AfterViewInit {
  @ViewChild('editor') editorElement!: ElementRef;

  @Input() set essayContent(value: string) {
    this._essayContent = value;
    this.updateContent();
  }
  get essayContent(): string {
    return this._essayContent;
  }

  @Input() set textToHighlight(value: string) {
    this._textToHighlight = value;
    this.updateContent();
  }
  get textToHighlight(): string {
    return this._textToHighlight;
  }

  @Output() essayContentChange = new EventEmitter<string>();

  private _essayContent: string = '';
  private _textToHighlight: string = '';
  private isUpdating = false;

  ngAfterViewInit() {
    this.updateContent();
    this.setupPlaceholder();
  }

  onContentChange(event: Event) {
    if (this.isUpdating) return;

    const div = event.target as HTMLDivElement;
    this._essayContent = div.innerText;
    this.essayContentChange.emit(this._essayContent);

    if (this._textToHighlight) {
      this.updateContent();
    }
  }

  getCharacterCount(): number {
    return this._essayContent.length;
  }

  private updateContent() {
    if (!this.editorElement?.nativeElement) return;

    this.isUpdating = true;

    const editor = this.editorElement.nativeElement;
    if (!this._textToHighlight.trim()) {
      editor.innerText = this._essayContent;
    } else {
      const escapedText = this.escapeRegExp(this._textToHighlight.trim());
      const regex = new RegExp(`(${escapedText})`, 'g');
      const highlightedContent = this._essayContent.replace(
        regex,
        '<span class="highlight">$1</span>'
      );
      editor.innerHTML = highlightedContent;
    }

    if (document.activeElement === editor) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(editor);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }

    this.isUpdating = false;
  }

  private setupPlaceholder() {
    const editor = this.editorElement.nativeElement;
    
    // Show placeholder when empty
    const updatePlaceholder = () => {
      if (!editor.textContent?.trim()) {
        editor.classList.add('empty');
      } else {
        editor.classList.remove('empty');
      }
    };

    editor.addEventListener('input', updatePlaceholder);
    updatePlaceholder();
  }

  private escapeRegExp(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
