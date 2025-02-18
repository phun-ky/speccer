import { describe, it, beforeEach, mock } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { template } from '../template.js';
import { verifyThat } from '../../../../../tests/helpers.js';
import { MockedFunction } from '../../../../types/tests.js';

describe('template', () => {
  let document: typeof window.document;
  let targetElement;

  beforeEach(() => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><html><body><div id="target"></div></body></html>'
    );
    global.document = window.document;
    document = window.document;
    targetElement = document.getElementById('target');
  });

  it('should return correct typography HTML without highlighting', async (test) => {
    const mockGetComputedStyle = test.mock.method(global, 'getComputedStyle');

    mockGetComputedStyle.mock.mockImplementation(
      (): unknown & CSSStyleDeclaration => {
        const styles = {
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          fontVariationSettings: 'normal',
          lineHeight: '24px',
          letterSpacing: '1px',
          fontStyle: 'normal'
        };
        return styles as CSSStyleDeclaration;
      }
    );

    const result = await template(targetElement, false);

    verifyThat(
      mockGetComputedStyle as unknown as MockedFunction<typeof getComputedStyle>
    ).calledTimes(1);
    assert.match(
      result,
      /<span class="property">font-family:<\/span> Arial, sans-serif;/
    );
    assert.match(
      result,
      /<span class="property">font-size:<\/span> 16px \/ 1rem;/
    );
    assert.match(result, /<span class="property">font-weight:<\/span> 400;/);
    assert.match(
      result,
      /<span class="property">line-height:<\/span> 24px \/ 1.5rem;/
    );
    assert.match(result, /<span class="property">letter-spacing:<\/span> 1px;/);
  });

  it('should return correct typography HTML with highlighting', async (test) => {
    const mockGetComputedStyle = test.mock.method(global, 'getComputedStyle');

    mockGetComputedStyle.mock.mockImplementation(
      (): unknown & CSSStyleDeclaration => {
        const styles = {
          fontFamily: '"Helvetica, Arial", sans-serif',
          fontSize: '18px',
          fontWeight: '700',
          fontVariationSettings: 'normal',
          lineHeight: '28px',
          letterSpacing: '0px',
          fontStyle: 'italic'
        };
        return styles as CSSStyleDeclaration;
      }
    );

    const result = await template(targetElement, true);
    assert.match(
      result,
      /"Helvetica<span class="token punctuation">, <\/span> Arial"<span class="token punctuation">, <\/span> sans-serif/
    );
    assert.match(
      result,
      /font-size<\/span><span class="token punctuation">:<\/span> <span class="token number">18/
    );
    assert.match(
      result,
      /font-weight<\/span><span class="token punctuation">:<\/span> <span class="token number">700/
    );
    assert.match(
      result,
      /line-height<\/span><span class="token punctuation">:<\/span> <span class="token number">28/
    );
  });
});
