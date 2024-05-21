const driveService = require.main.require('./services/Microsoft/drive');
const fs = require('fs');

exports.get = async (req, res) => {
  const serviceRes = await driveService.getDrive();

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getRoot = async (req, res) => {
  const serviceRes = await driveService.getRoot();

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getChildren = async (req, res) => {
  const item_id = req.params.id;

  const serviceRes = await driveService.getChildren(item_id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.createFolder = async (req, res) => {
  const parent_item_id = req.params.id;
  const folder_name = req.body.folder_name;

  const serviceRes = await driveService.createFolder(
    parent_item_id,
    folder_name
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.upload = async (req, res) => {
  const location = req.params.id;
  const file = req.file;
  const fileStream = fs.createReadStream(file.path);

  const fileData = {
    name: file.originalname,
    location: location,
    data: fileStream,
  };

  const serviceRes = await driveService.upload(fileData);
  fs.unlinkSync(file.path); //remove file
  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deleteItem = async (req, res) => {
  const item_id = req.params.id;

  const serviceRes = await driveService.deleteItem(item_id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.search = async (req, res) => {
  const q = req.query.q;

  const serviceRes = await driveService.search(q);

  res.status(serviceRes.status).json(serviceRes.data);
};
