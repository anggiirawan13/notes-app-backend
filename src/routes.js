const { deleteNoteByIdHandler } = require('./handler');
const { editNoteByIdHandler } = require('./handler');
const { getNoteByIdHandler } = require('./handler');
const { addNoteHandler, getAllNotesHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: (request, h) => addNoteHandler(request, h),
  },
  {
    method: 'GET',
    path: '/notes',
    handler: (request, h) => getAllNotesHandler(request, h),
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: (request, h) => getNoteByIdHandler(request, h),
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: (request, h) => editNoteByIdHandler(request, h),
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: (request, h) => deleteNoteByIdHandler(request, h),
  },
];

module.exports = routes;
