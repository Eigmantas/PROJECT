const pageService = require('../lib/pageService');

const index = (req, res) => {
  res.render('index', { title: 'Forsíða' });
};

const matsedill = (req, res) => {
  const menu = pageService.getMenu();
  res.render('matsedill', { title: 'Matseðill FB', menu });
};

const matsedillDetail = (req, res) => {
  const { id } = req.params;
  const item = pageService.getMenuItemById(id);

  if (!item) {
    return res.status(404).render('404', { title: 'Síða fannst ekki' });
  }

  res.render('matsedill-detail', { title: item.name, item });
};

const gullfoss = (req, res) => {
  const info = pageService.getGullfoss();
  res.render('gullfoss', { title: info.title, info });
};

module.exports = {
  index,
  matsedill,
  matsedillDetail,
  gullfoss
};