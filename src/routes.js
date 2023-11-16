const { addBookshandler, 
        getAllBookshandler,
        getAllBookshandlerbyId,
        editBookshandlerbyId,
        deleteBookshandlerbyId,

} = require('./handler');

const routes = [
  {
    method:'POST',
    path: '/books',
    handler:addBookshandler,
  },
  {
    method:'GET',
    path:'/books',
    handler: getAllBookshandler,
  },
  {
    method:'GET',
    path:'/books/{id}',
    handler: getAllBookshandlerbyId,
  },
  {
    method:'PUT',
    path:'/books/{id}',
    handler: editBookshandlerbyId,
  },
  {
    method:'DELETE',
    path:'/books/{id}',
    handler: deleteBookshandlerbyId,
  },
];
module.exports = routes;