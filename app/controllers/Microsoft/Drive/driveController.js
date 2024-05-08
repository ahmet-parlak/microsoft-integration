const driveService = require.main.require('./services/Microsoft/drive');
const fs = require('fs');

exports.get = async (req, res) => {
  const drive = await driveService.getDrive();

  res.status(drive.status).json(drive.data);
};

exports.getRoot = async (req, res) => {
  const root = await driveService.getRoot();

  res.status(root.status).json(root.data);
};

exports.getChildren = async (req, res) => {
  const item_id = req.params.id;
  const children = await driveService.getChildren(item_id);
  res.status(children.status).json(children.data);
};

exports.createFolder = async (req, res) => {
  const parent_item_id = req.params.id;
  const folder_name = req.body.folder_name;

  const folder = await driveService.createFolder(parent_item_id, folder_name);

  res.status(folder.status).json(folder.data);
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

  const uploadStatus = await driveService.upload(fileData);
  fs.unlinkSync(file.path); //remove file
  res.status(uploadStatus.status).json(uploadStatus.data);
};

exports.deleteItem = async (req, res) => {
  const item_id = req.params.id;

  const deleteRes = await driveService.deleteItem(item_id);

  res.status(deleteRes.status).json(deleteRes.data);
};

exports.search = async (req, res) => {
  const q = req.query.q;

  const searchRes = await driveService.search(q);

  res.status(searchRes.status).json(searchRes.data);
};
