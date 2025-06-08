import { Injectable } from '@angular/core';
import { TextReplacement } from '../models/text-replacement.model';

@Injectable({
  providedIn: 'root'
})
export class TextReplacementService {
  replaceText(text: string | null | undefined, replacement: TextReplacement): string | null | undefined {
    if (!text || !replacement.originalText) {
      return text;
    }
    
    return text.split(replacement.originalText).join(replacement.replacementText || '');
  }
} 