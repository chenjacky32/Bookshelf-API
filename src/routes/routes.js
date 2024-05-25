const {
  AddBookshandler,
  GetAllBookshandler,
  GetAllBookshandlerbyId,
  EditBookshandlerbyId,
  DeleteBookshandlerbyId,

} = require('../handler/handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: AddBookshandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: GetAllBookshandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: GetAllBookshandlerbyId,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: EditBookshandlerbyId,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: DeleteBookshandlerbyId,
  },
];
module.exports = routes;
