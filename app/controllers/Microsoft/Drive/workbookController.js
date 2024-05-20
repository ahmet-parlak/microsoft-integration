const workbookservice = require.main.require('./services/Microsoft/workbook');

exports.createSession = async (req, res) => {
  const itemId = req.params.id;

  const serviceRes = await workbookservice.createSession(itemId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.refreshSession = async (req, res) => {
  const itemId = req.params.id;

  const serviceRes = await workbookservice.refreshSession(itemId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.closeSession = async (req, res) => {
  const itemId = req.params.id;

  const serviceRes = await workbookservice.closeSession(itemId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getTables = async (req, res) => {
  const itemId = req.params.id;

  const serviceRes = await workbookservice.getTables(itemId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getWorksheets = async (req, res) => {
  const itemId = req.params.id;

  const serviceRes = await workbookservice.getWorksheets(itemId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getNames = async (req, res) => {
  const itemId = req.params.id;

  const serviceRes = await workbookservice.getNames(itemId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.addWorksheet = async (req, res) => {
  const itemId = req.params.id;
  const name = req.body.name;

  const serviceRes = await workbookservice.addWorksheet(itemId, name);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.updateWorksheet = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;
  const data = req.body;
  if (data?.position) data.position = parseInt(data.position);
  const serviceRes = await workbookservice.updateWorksheet(
    itemId,
    worksheet,
    data
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deleteWorksheet = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;

  const serviceRes = await workbookservice.deleteWorksheet(itemId, worksheet);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.addTable = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;

  const address = req.body.address;
  const hasHeaders =
    req.body.hasHeaders.toLowerCase() === 'true' ? true : false;

  const data = { address, hasHeaders };

  const serviceRes = await workbookservice.addTable(itemId, worksheet, data);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getTables = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;

  const serviceRes = await workbookservice.getTables(itemId, worksheet);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getTable = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;
  const table = req.params.table;

  const serviceRes = await workbookservice.getTable(itemId, worksheet, table);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.updateTable = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;
  const table = req.params.table;
  const data = req.body;

  const serviceRes = await workbookservice.updateTable(
    itemId,
    worksheet,
    table,
    data
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deleteTable = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;
  const table = req.params.table;

  const serviceRes = await workbookservice.deleteTable(
    itemId,
    worksheet,
    table
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getRows = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;
  const table = req.params.table;

  const serviceRes = await workbookservice.getRows(itemId, worksheet, table);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.addRow = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;
  const table = req.params.table;

  const data = req.body;

  const serviceRes = await workbookservice.addRow(
    itemId,
    worksheet,
    table,
    data
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getRow = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;
  const table = req.params.table;
  const index = req.params.index;

  const serviceRes = await workbookservice.getRow(
    itemId,
    worksheet,
    table,
    index
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.updateRow = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;
  const table = req.params.table;
  const index = req.params.index;

  const data = req.body;

  const serviceRes = await workbookservice.updateRow(
    itemId,
    worksheet,
    table,
    index,
    data
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deleteRow = async (req, res) => {
  const itemId = req.params.id;
  const worksheet = req.params.worksheet;
  const table = req.params.table;
  const index = req.params.index;

  const serviceRes = await workbookservice.deleteRow(
    itemId,
    worksheet,
    table,
    index
  );

  res.status(serviceRes.status).json(serviceRes.data);
};
