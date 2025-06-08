import { TestBed } from '@angular/core/testing';
import { TextReplacementService } from './text-replacement.service';
import { TextReplacement } from '../models/text-replacement.model';

describe('TextReplacementService', () => {
  let service: TextReplacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextReplacementService]
    });
    service = TestBed.inject(TextReplacementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should replace single occurrence of text', () => {
    const text = 'The quick brown fox jumps over the lazy dog.';
    const replacement: TextReplacement = {
      originalText: 'quick brown fox',
      replacementText: 'fast red fox'
    };

    const result = service.replaceText(text, replacement);
    expect(result).toBe('The fast red fox jumps over the lazy dog.');
  });

  it('should replace multiple occurrences of text', () => {
    const text = 'The fox jumps over the fox while the fox watches.';
    const replacement: TextReplacement = {
      originalText: 'fox',
      replacementText: 'wolf'
    };

    const result = service.replaceText(text, replacement);
    expect(result).toBe('The wolf jumps over the wolf while the wolf watches.');
  });

  it('should handle empty original text', () => {
    const text = 'The quick brown fox.';
    const replacement: TextReplacement = {
      originalText: '',
      replacementText: 'wolf'
    };

    const result = service.replaceText(text, replacement);
    expect(result).toBe('The quick brown fox.');
  });

  it('should handle empty replacement text', () => {
    const text = 'The quick brown fox.';
    const replacement: TextReplacement = {
      originalText: 'quick brown',
      replacementText: ''
    };

    const result = service.replaceText(text, replacement);
    expect(result).toBe('The  fox.');
  });

  it('should handle text not found in content', () => {
    const text = 'The quick brown fox.';
    const replacement: TextReplacement = {
      originalText: 'lazy dog',
      replacementText: 'sleepy cat'
    };

    const result = service.replaceText(text, replacement);
    expect(result).toBe('The quick brown fox.');
  });

  it('should handle null or undefined input text', () => {
    const replacement: TextReplacement = {
      originalText: 'test',
      replacementText: 'replacement'
    };

    const nullResult = service.replaceText(null as unknown as string, replacement);
    const undefinedResult = service.replaceText(undefined as unknown as string, replacement);
    
    expect(nullResult).toBeNull();
    expect(undefinedResult).toBeUndefined();
  });
}); 