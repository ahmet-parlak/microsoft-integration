const noteService = require.main.require('./services/Microsoft/note');

exports.getNotebooks = async (req, res) => {
  const serviceRes = await noteService.getNotebooks();

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getNotebookSections = async (req, res) => {
  const id = req.params.id;
  const serviceRes = await noteService.getNotebookSections(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.createNotebook = async (req, res) => {
  const name = req.body.name;
  const serviceRes = await noteService.createNotebook(name);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getSections = async (req, res) => {
  const serviceRes = await noteService.getSections();

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getSection = async (req, res) => {
  const id = req.params.id;
  const serviceRes = await noteService.getSection(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.createNotbookSection = async (req, res) => {
  const notebook_id = req.params.id;
  const name = req.body.name;
  const serviceRes = await noteService.createSection(notebook_id, name);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getSectionPages = async (req, res) => {
  const id = req.params.id;
  const serviceRes = await noteService.getSectionPages(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getPages = async (req, res) => {
  const serviceRes = await noteService.getPages();

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getPage = async (req, res) => {
  const id = req.params.id;
  const serviceRes = await noteService.getPage(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getPageContent = async (req, res) => {
  const id = req.params.id;
  const serviceRes = await noteService.getPageContent(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.createPage = async (req, res) => {
  const data = req.body.data;
  const serviceRes = await noteService.createPage(data);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.createSectionPage = async (req, res) => {
  const id = req.params.id;
  const data = req.body.data;
  const serviceRes = await noteService.createSectionPage(id, data);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deletePage = async (req, res) => {
  const id = req.params.id;
  const serviceRes = await noteService.deletePage(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deleteSection = async (req, res) => {
  const id = req.params.id;
  const serviceRes = await noteService.deleteSection(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deleteNotebook = async (req, res) => {
  const id = req.params.id;
  const serviceRes = await noteService.deleteNotebook(id);

  res.status(serviceRes.status).json(serviceRes.data);
};
