exports.users_list = function (req, res) {
  // list our users
  // pretend we're fetching this from a database
  let users = [
    {
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bsmith@test.com',
    },
    {
      firstName: 'Jack',
      lastName: 'Jones',
      email: 'jjones@test.com',
    },
  ];

  res.send(users);
};

exports.user_create = function (req, res) {
  // create our user
  console.log('user was created!');
  res.send('User created');
};

exports.user_update = function (req, res) {
  // update our user
  console.log('user was updated!');
  res.send('User updated');
};

exports.user_delete = function (req, res) {
  // delete a user
  console.log('user was deleted!');
  res.send('User deleted');
};
