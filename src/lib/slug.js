export function slugOf(a) {
  return 'press-' + `${a.outlet || ''} ${a.date || ''}`.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
