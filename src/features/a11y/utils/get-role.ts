export const getRole = (targetEl:HTMLElement): string => {
  if(!targetEl) return '';

  if(targetEl.role && targetEl.role !== '') return targetEl.role;

  const _node_name = targetEl.nodeName.toLowerCase();

  if(['header', 'footer', 'section', 'form', 'main', 'nav', 'aside'].includes(_node_name)) return _node_name;

  return 'N/A';
};
