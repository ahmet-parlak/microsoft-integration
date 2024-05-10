const axios = require('axios');
const { config } = require('./auth');

exports.getNotebooks = async () => {
  const url = 'https://graph.microsoft.com/v1.0/me/onenote/notebooks';

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.createNotebook = async (name) => {
  const url = 'https://graph.microsoft.com/v1.0/me/onenote/notebooks';
  const notebook = {
    displayName: name,
  };
  return axios
    .post(url, notebook, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getNotebookSections = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/notebooks/${id}/sections`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getSections = async () => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/sections`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getSection = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/sections/${id}`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.createSection = async (id, name) => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/notebooks/${id}/sections`;
  const section = {
    displayName: name,
  };
  return axios
    .post(url, section, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getSectionPages = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/sections/${id}/pages`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getPages = async () => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/pages`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getPage = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/pages/${id}`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getPageContent = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/pages/${id}/content`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.createPage = async (html) => {
  const url = 'https://graph.microsoft.com/v1.0/me/onenote/pages';
  config.headers['Content-Type'] = 'text/html';
  return axios
    .post(url, html, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.createSectionPage = async (id, html) => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/sections/${id}/pages`;
  config.headers['Content-Type'] = 'text/html';
  return axios
    .post(url, html, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.deletePage = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/pages/${id}`;
  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.deleteSection = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/sections/${id}`;
  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.deleteNotebook = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/onenote/notebooks/${id}`;
  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};
