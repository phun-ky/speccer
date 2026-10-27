import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { escapeHTML } from '../escape-html';

describe('escapeHTML', () => {
  it('should escape markup', () => {
    assert.equal(
      escapeHTML('<img src=x onerror=alert(1)>'),
      '&lt;img src=x onerror=alert(1)&gt;'
    );
  });

  it('should escape ampersands first, so entities are shown as written', () => {
    assert.equal(escapeHTML('&lt;b&gt;'), '&amp;lt;b&amp;gt;');
    assert.equal(escapeHTML('A & B'), 'A &amp; B');
  });

  it('should leave plain text unchanged', () => {
    assert.equal(escapeHTML('Document name'), 'Document name');
    assert.equal(escapeHTML('"Helvetica, Arial"'), '"Helvetica, Arial"');
    assert.equal(escapeHTML(''), '');
  });

  it('should render as the original text when inserted with innerHTML', () => {
    const input = '<script>alert(1)</script> & <b>bold</b>';
    const element = document.createElement('div');

    element.innerHTML = escapeHTML(input);

    assert.equal(element.textContent, input);
    assert.equal(element.children.length, 0);
  });
});
