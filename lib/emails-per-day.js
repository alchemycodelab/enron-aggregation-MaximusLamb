module.exports = [
  {
    '$project': {
      'Date': {
        '$dateToString': {
          'format': '%Y-%m-%d', 
          'date': '$headers.Date'
        }
      }
    }
  }, {
    '$group': {
      '_id': '$Date', 
      'email': {
        '$sum': 1
      }
    }
  }, {
    '$group': {
      '_id': null, 
      'min': {
        '$min': '$email'
      }, 
      'max': {
        '$max': '$email'
      }, 
      'avg': {
        '$avg': '$email'
      }
    }
  }
];
